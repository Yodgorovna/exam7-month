import axios from "axios";
import { loadState } from "./storage";

const request = axios.create({ baseURL: "http://localhost:3000" });

request.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${loadState("user")?.token}`,
  };
  return config;
});
export { request };
