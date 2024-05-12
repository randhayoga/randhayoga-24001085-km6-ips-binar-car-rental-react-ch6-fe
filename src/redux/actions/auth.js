import axios from "axios";
import { toast } from "react-toastify";
import { setToken, setUser } from "../reducers/auth";

export const register =
    (navigate, name, email, password, photo) => async (dispatch) => {
        let data = new FormData();
        data.append("email", email);
        data.append("password", password);
        data.append("name", name);
        if (photo) {
            data.append("photo", photo);
        } else {
            data.append("photo", null);
        }

        let config = {
            method: "post",
            url: `${import.meta.env.VITE_BACKEND_API}/auth/register`,
            data: data,
        };

        try {
            const response = await axios.request(config);

            // Get and save the token to local storage
            const { data } = response.data;
            const { token } = data;

            // Change the token value in the reducer
            dispatch(setToken(token));
            dispatch(setUser(data?.user));

            // Redirect to home
            navigate("/");
        } catch (error) {
            dispatch(logout(navigate));
            toast.error(error?.response?.data?.message);
        }
    };

export const login = (navigate, email, password) => async (dispatch) => {
    let data = JSON.stringify({
        email,
        password,
    });

    let config = {
        method: "post",
        url: `${import.meta.env.VITE_BACKEND_API}/auth/login`,
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
    };

    try {
        const response = await axios.request(config);

        // Get and save the token to local storage
        const { data } = response.data;
        const { token } = data;

        // Change the token value in the reducer
        dispatch(setToken(token));
        dispatch(setUser(data?.user));

        // Redirect to home
        navigate("/");
    } catch (error) {
        dispatch(logout(navigate));
        toast.error(error?.response?.data?.message);
    }
};

export const logout = () => async (dispatch) => {
    localStorage.removeItem("token");
    dispatch(setToken(null));
    dispatch(setUser(null));
};

export const getProfile =
    (navigate, successRoute, errorRoute) => async (dispatch, getState) => {
        const state = getState();
        const { token } = state.auth;

        if (!token) {
            dispatch(logout());

            // Redirect to error route
            if (navigate && errorRoute) {
                navigate(errorRoute);
            }

            return;
        }

        let config = {
            method: "get",
            url: `${import.meta.env.VITE_BACKEND_API}/auth/profile`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            const response = await axios.request(config);
            const { data } = response.data;

            // Set user by response
            dispatch(setUser(data));

            // Redirect to success route
            if (navigate && successRoute) {
                navigate(successRoute);
            }
        } catch (error) {
            toast.error(error?.response?.data?.message);

            dispatch(logout());

            // Redirect to error route
            if (navigate && errorRoute) {
                navigate(errorRoute);
            }
        }
    };
