import axios from "axios"

const BASE_URL = "https://noinertia.up.railway.app/"


const axiosInstance = axios.create({
    baseURL:BASE_URL,
    withCredentials:true
})



export default axiosInstance;