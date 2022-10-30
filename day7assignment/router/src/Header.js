import React from "react";
import { BrowserRouter, Routes, Route , Link} from "react-router-dom";
import Company from "./Company";
import Employee from "./Employee";
import User from "./Users";

function Header(){
    return(
        <BrowserRouter>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Motivity
        </a>
        <div className="" id="navbarNav">
          <ul className="navbar-nav">
          <li>
              <Link to="/company">Company</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/employee">Employee</Link>
            </li>
          </ul>
        </div>
      </nav>
            <Routes>
                <Route path="/" element={<Company />}></Route>
                <Route  path="company" element={<Company />}></Route>
                <Route path="employee" element={<Employee />}></Route>
                <Route path="users" element={<User />}></Route>
               
            </Routes>
        
        </BrowserRouter>
        
    )
}
export default Header