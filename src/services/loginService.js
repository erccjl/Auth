import { urls } from '../constants/api'
import clientInstance from '../client';
import { SuccessToast } from '../components/Toast/Toast';

export const loginAPI = async (loginRequest) => {
    const response = await clientInstance
        .post(urls.loginAPI, loginRequest);

    if (response.status == 200) {
        SuccessToast("Usuario autenticado");
    }
}