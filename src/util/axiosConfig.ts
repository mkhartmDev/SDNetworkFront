import Axios from "axios";

export const axiosInstance = Axios.create({
<<<<<<< HEAD
  baseURL: "http://localhost:8081/SDNetwork",
=======
  baseURL: "http://3.138.193.161:8080/SDNetwork-0.0.1-SNAPSHOT",
>>>>>>> 1c0fc19dd6bff6f8b1c5481332795ae0876e869b
});

// export const axiosInstance = Axios.create({
//   baseURL: "", // we will put the EC2 URL in here before deployment
// });q