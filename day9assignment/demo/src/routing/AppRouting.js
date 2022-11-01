import React from "react";
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Candidate from "../components/Candidate";
import Employer from "../components/Employer";
import Admin from "../components/Admin";
import Signin from "../components/Signin"
import PrivateRoutes from "./private/PrivateRouters";
import Signup from "../components/Signup";
import PrivateCandidateRoute from "./private/PrivateCandidateRoute";
import PrivateEmployerRoute from "./private/PrivateEmployerRoute ";
import PrivateAdminRoute from "./private/PrivateAdminRoute";

function AppRouting(){
  
    return(
        <BrowserRouter>
         
            <Routes>
                <Route path="/dashboard" element={<PrivateRoutes path="/"></PrivateRoutes>}/>
                <Route path="/" element={<Signin />}></Route>
                <Route path="/Signup" element={<Signup />}></Route>
                <Route path="/candidate" element={<PrivateCandidateRoute path="/"><Candidate/></PrivateCandidateRoute>}></Route>
                <Route path="/employer" element={<PrivateEmployerRoute path="/"><Employer/></PrivateEmployerRoute>}></Route>
                <Route path="/admin" element={<PrivateAdminRoute path="/"><Admin/></PrivateAdminRoute>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouting