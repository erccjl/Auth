import {urls} from '../Constants/api'
import clientInstance from '../client';

export const loginAPI = (loginRequest) => async () => {
    console.log("entro al evento")
    const response = await clientInstance
        .post(urls.loginAPI, loginRequest);

        console.log("Usuario autenticado")

        if(response.status == 200) {
            console.log("Usuario autenticado")
        }
}