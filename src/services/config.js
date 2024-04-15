import axios from "axios";

const api = axios.create({ baseURL: "https://fakestoreapi.com/products" });

api.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (er) => {
    return Promise.reject(er);
  }
);

export default api;
