import Axios from "axios";

export const axiosInstance = Axios.create({
  baseURL: "http://localhost:8080/SDNetwork",
  
});