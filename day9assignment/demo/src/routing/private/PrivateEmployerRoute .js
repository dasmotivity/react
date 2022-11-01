import { Navigate } from "react-router-dom";


function PrivateEmployerRoute({path,children}){
    if(localStorage.getItem("role") === "employer" && localStorage.getItem("isLoggedIn")==="true"){
        alert("login success")
        return children;
    }else{
        alert("invalid credentials")
        return <Navigate to={path}/>
    }
}
export default PrivateEmployerRoute