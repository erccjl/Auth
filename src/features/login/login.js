import { useNavigate } from "react-router-dom";
import SignIn from "../../components/Login/SignIn";
import { loginAPI } from "../../services/loginService";
import { ROUTES } from "../../Constants/routes";

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = async (loginRequest) => {
        try {
          await loginAPI(loginRequest)
          navigate(ROUTES.DASHBOARD);
        } catch (error) {
          console.error(error)
          navigate(ROUTES.DASHBOARD); //TODO: BORRAR
        }
      };

    return(<SignIn handleSubmit={handleSubmit} />)
}

export default Login;