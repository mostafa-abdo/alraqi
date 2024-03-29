import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
})


axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

axiosClient.interceptors.response.use((response) => {
    // Handle successful responses
    return response;

}), (error) => {
    // Handle errors
    const {response} = error;

    if (response.status == 401) {
        localStorage.removeItem('ACCESS_TOKEN');
    }

    throw error;
}

export default axiosClient;
