import Axios from "axios";

export const axiosInstance = Axios.create({
  baseURL: "http://18.188.63.75:8080/SDNetwork-0.0.1-SNAPSHOT",
});

// export const axiosInstance = Axios.create({
//   baseURL: "", // we will put the EC2 URL in here before deployment
// });