import axios from "axios";

const httpJson = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

export default httpJson;