import { Navigate } from "react-router-dom";


function PrivateAdminRoute({path,children}){
    if(localStorage.getItem("role") === "admin" && localStorage.getItem("isLoggedIn") === "true"){
        alert("login success")
        return children;
    }else{
        alert("invalid credentials")
        return <Navigate to={path}/>
    }
}
export default PrivateAdminRoute