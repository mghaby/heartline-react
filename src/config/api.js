import axios from 'axios';

const heartLineApi = axios.create({
    baseURL: 'http://localhost:3000'
})

heartLineApi.interceptors.request.use((req) => {
    const token = sessionStorage.getItem('token');
    if (token) {
        req.headers["Authorization"] = `Bearer ${token}`
    }
    return req
});

export default heartLineApi;