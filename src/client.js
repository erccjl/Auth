import axios from 'axios';
import { ErrorToast } from './components/Toast/Toast';

const clientInstance = axios.create({
    baseURL: 'https://localhost:44328/API',
    timeout: 8000,
});

clientInstance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.message === "Network Error") {
        ErrorToast("Error de red: Verifique su conexión a Internet");
    } else if (error.response) {
        ErrorToast(`Error ${error.response.status}: ${error.response.data.message || "Ocurrió un error inesperado"}`);
    } else {
        ErrorToast("Ocurrió un error inesperado. Inténtelo de nuevo más tarde.");
    }
    return Promise.reject(error);
})

export default clientInstance;