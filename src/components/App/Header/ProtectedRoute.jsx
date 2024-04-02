import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ()=> {
    let userInfoString = localStorage.getItem("userInfo");
    let userInfo = JSON.parse(userInfoString);
    if(!userInfo){
        return <Navigate to={'/'}/>
    }
    return <Outlet/>
}