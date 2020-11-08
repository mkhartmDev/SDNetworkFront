import Axios from "axios";

export const axiosInstance = Axios.create({
  baseURL: "localhost:8080/SDNetwork",
});