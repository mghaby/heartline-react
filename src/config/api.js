import axios from 'axios';

const heartLineApi = axios.create({
    baseURL: 'http://localhost:3000'
})

export default heartLineApi;