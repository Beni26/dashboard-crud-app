import axios from "axios";



export const BASE_URL = "https://mock-api-json-server-xa2e.onrender.com/";
const app = axios.create({
    baseURL:BASE_URL,
})

const http = {
    get:app.get,
    post:app.post,
    delete:app.delete,
    put:app.put,
    patch:app.patch,
}



export default http;
