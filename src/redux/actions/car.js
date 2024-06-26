import axios from "axios";
import { toast } from "react-toastify";
import FormData from "form-data";
import { setCars, setCar } from "../reducers/car";

export const getCars = () => async (dispatch) => {
    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_BACKEND_API}/cars/`,
    };

    try {
        const response = await axios.request(config);
        const data = response.data;

        dispatch(setCars(data));
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
};

export const getCar = (id) => async (dispatch) => {
    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_BACKEND_API}/cars/${id}/`,
    };

    try {
        const response = await axios.request(config);
        const data = response.data;

        dispatch(setCar(data));
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
};

export const createCar =
    (
        navigate,
        manufacturerName,
        modelName,
        type,
        year,
        transmission,
        capacity,
        rentPerDay,
        plate,
        availableAt,
        description,
        image
    ) =>
    async () => {
        const token = localStorage.getItem("token");

        let data = new FormData();
        data.append("manufacturerName", manufacturerName);
        data.append("modelName", modelName);
        data.append("type", type);
        data.append("year", year);
        data.append("transmission", transmission);
        data.append("capacity", capacity);
        data.append("rentPerDay", rentPerDay);
        data.append("plate", plate);
        data.append("availableAt", availableAt);
        data.append("description", description);

        const currentDate = new Date();
        if (currentDate > new Date(availableAt)) {
            data.append("available", false);
        } else {
            data.append("available", true);
        }

        if (image) {
            data.append("image", image);
        } else {
            data.append("image", null);
        }

        let config = {
            method: "post",
            maxBodyLength: Infinity,
            url: `${import.meta.env.VITE_BACKEND_API}/cars/`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: data,
        };

        try {
            const response = await axios.request(config);
            const { data } = response.data;
            navigate("/");
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };

export const updateCar =
    (
        navigate,
        manufacturerName,
        modelName,
        type,
        year,
        transmission,
        capacity,
        rentPerDay,
        plate,
        availableAt,
        description,
        image
    ) =>
    async () => {
        const token = localStorage.getItem("token");

        let data = new FormData();
        if (manufacturerName) data.append("manufacturerName", manufacturerName);
        if (modelName) data.append("modelName", modelName);
        if (type) data.append("type", type);
        if (year) data.append("year", year);
        if (transmission) data.append("transmission", transmission);
        if (capacity) data.append("capacity", capacity);
        if (rentPerDay) data.append("rentPerDay", rentPerDay);
        if (plate) data.append("plate", plate);
        if (availableAt) data.append("availableAt", availableAt);
        if (description) data.append("description", description);

        if (availableAt) {
            const currentDate = new Date();
            if (currentDate > new Date(availableAt)) {
                data.append("available", false);
            } else {
                data.append("available", true);
            }
        }

        if (image) {
            data.append("image", image);
        } else {
            data.append("image", null);
        }

        let config = {
            method: "put",
            maxBodyLength: Infinity,
            url: `${import.meta.env.VITE_BACKEND_API}/cars/`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: data,
        };

        try {
            const response = await axios.request(config);
            const { data } = response.data;
            navigate("/");
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };
