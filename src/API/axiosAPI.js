import axios from "axios";

export const axiosAPI = axios.create({
    baseURL : 'https://breeze-time-server.vercel.app'
})

axiosAPI.interceptors.request.use(function (config) {
    if(!config.headers.authorization){
        config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
axiosAPI.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

  export default axiosAPI;