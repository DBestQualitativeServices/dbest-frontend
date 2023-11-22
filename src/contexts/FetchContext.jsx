import {createContext} from "react";
import axios from "axios";

const FetchContext = createContext();

const {Provider} = FetchContext;

const FetchProvider = ({children}) => {
    const authAxios = axios.create({
        baseURL: "https://chataibot-backend.azurewebsites.net/api/dbest",
    });

    const get = async (url, params) => {

            const response = await authAxios.get(url, {params: params});
            return response.data;


    };

    const post = async (url, data, params) => {
        const response = await authAxios.post(url, data, params);
        return response.data;
    };

    const sendContactForm = async (formData) => {
        return await post("/form", formData)
    }

    const getAllContactForms = async (token) => {
        await get("/contacts", {key: token})
    }

    const fetchProviderValue = {sendContactForm, getAllContactForms};

    return <Provider value={fetchProviderValue}>{children}</Provider>;
};

export {FetchContext, FetchProvider};
