import axios from "axios";

const _apiService = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

export default _apiService;