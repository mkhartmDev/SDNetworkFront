import Axios from "axios";

export const axiosInstance = Axios.create({
  baseURL: "http://localhost:8080/SDNetwork",
});

// export const axiosInstance = Axios.create({
//   baseURL: "", // we will put the EC2 URL in here before deployment
// });