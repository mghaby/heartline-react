import axios from 'axios';

const heartLineApi = axios.create({
    baseURL: 'https://heartline-api.herokuapp.com'
})

heartLineApi.interceptors.request.use((req) => {
    const token = sessionStorage.getItem('token');
    if (token) {
        req.headers["Authorization"] = `Bearer ${token}`
    }
    return req
});

export default heartLineApi;