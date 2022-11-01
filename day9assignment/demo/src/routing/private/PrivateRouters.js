import { Navigate } from "react-router-dom";


function PrivateRoutes ({path,children}){
    if(localStorage.getItem("role") === "admin" && localStorage.getItem("isLogged") === "true"){
        return <Navigate to="/admin"></Navigate>
    }else if(localStorage.getItem("role") === "employer" && localStorage.getItem("isLogged") === "true"){
        return <Navigate to="/employer"></Navigate>
    }else if(localStorage.getItem("role") === "candidate" && localStorage.getItem("isLogged") === "true"){
        return <Navigate to="/candidate"></Navigate>
    }else{
        alert("invalid credentials")
    }
}
export default PrivateRoutes