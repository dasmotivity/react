import { Navigate } from "react-router-dom";


function PrivateCandidateRoute({path,children}){
    if(localStorage.getItem("role") === "candidate" && localStorage.getItem("isLoggedIn")==="true"){
        alert("login success")
        return children;
    }else{
        alert("invalid credentials")
        return <Navigate to={path}/>
    }
}
export default PrivateCandidateRoute