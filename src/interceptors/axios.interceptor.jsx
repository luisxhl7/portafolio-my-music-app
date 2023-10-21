import axios from "axios"
import { getValidationError } from "../utils/get-validation-error.js"

export const axiosInterceptor = () => {

    const updateHeader = (request) => {
        const token = sessionStorage.getItem('accessToken');
        const newHeaders = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'aplication/json'
        };
        request.headers = newHeaders;
        return request;
    }

    axios.interceptors.request.use((request) => {
        if (request.url?.includes('assets')) {
            return request;
        }else {
            return updateHeader(request);
        }
    })

    axios.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            console.log(getValidationError(error.code));
            return Promise.reject(error);
        }
    );
}