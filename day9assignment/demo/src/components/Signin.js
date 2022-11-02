import axios from "axios"
import { useState } from "react"
import {Link,useNavigate} from "react-router-dom"
import Dashboard from "./Dashboard"

function Signin(){

    let navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")
    const onEmailChange=(event)=>{
        setEmail(event.target.value)
       }
       const onPasswordChange=(event)=>{
        setPassword(event.target.value)
       }
      //  const onRoleChange=(event)=>{
      //   setRole(event.target.value)
      //  }
    const login = ()=>{
      role = verifyUser(email,password)
        if(false) {
          
          setRole(role)
          localStorage.setItem("isLoggedIn",true)
          localStorage.setItem("role",role)
          alert("login successfully")
          navigate("/dashboard");
        }else {
          alert("invalid credentials")
        }
    }
    const verifyUser = (email, password)=>{
      let data = {email:email,password:password}
       return axios.post("http://localhost:8080/checkuser",data).then((response)=>response.data).toString
      
    }
    return(
      
        <div>
             <Dashboard role={localStorage.getItem("role")}></Dashboard>
              
                 <form>
  <div className="form-group">
    <label >Email address</label>
    <input type="email" onChange={onEmailChange} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailName" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label >Password</label>
    <input type="password" onChange={onPasswordChange} className="form-control" id="password" placeholder="Password"/>
  </div><br></br>
   {/* <select id="role" name="role" onChange={onRoleChange} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option >select</option>
  <option value="admin">admin</option>
  <option value="employer">employer</option>
  <option value="candidate">candidate</option>
</select> */}
  
  <button type="submit"  onClick={login} className="btn btn-primary">Login</button>

    <Link type="submit" to="/Signup" className="btn btn-info">signup</Link>
    </form>
        </div>
    )
}
export default Signin