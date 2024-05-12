import axios from "axios";
import { toast } from "react-toastify";
import FormData from "form-data";
import fs from "fs";
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
    async (dispatch, getState) => {
        const { token } = getState().auth;

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
                ...data.getHeaders(),
            },
            data: data,
        };

        try {
            const response = await axios.request(config);
            const { data } = response.data;
            navigate(`/car/${data.id}`);
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };
