import axios from 'axios';
import { ErrorToast } from './components/Toast/Toast';

const clientInstance = axios.create({
    baseURL: 'https://localhost:44328/API',
    timeout: 8000,
});

clientInstance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    ErrorToast(error.message);
    return Promise.reject(error);
})

export default clientInstance;