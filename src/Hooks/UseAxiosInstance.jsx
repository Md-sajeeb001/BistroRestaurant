import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
const UseAxiosInstance = () => {
  return AxiosInstance;
};

export default UseAxiosInstance;
