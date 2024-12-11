import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../Constants/routes";
import Login from "../features/login/login";
import Dashboard from "../features/dashboard/dashboard";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path={ROUTES.LOGIN} element={<Login />}></Route>
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />}></Route>
        </Routes>
    );
}

export default AppRouter;