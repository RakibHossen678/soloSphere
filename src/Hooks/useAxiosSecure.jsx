import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
    const {logOut}=useAuth()
    const navigate=useNavigate()
  //interceptor
  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
   async (error) => {
      console.log('error from interceptor',error.response);
      if(error.response.statues===401 || error.response.statues===403){
        await logOut()
        navigator('/login')
      }
      return Promise.reject(error)
    }
  );

  //   axios.interceptors.request
  return axiosSecure;
};

export default useAxiosSecure;
