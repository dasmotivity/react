import {  useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import Dashboard from "./Dashboard"

const Signup = ()=>{
    const navigate = useNavigate()
    const [userDetails, setUserDetails] = useState({userName:"",password:"",role:""})
    const handleSubmit = (event)=>{
        event.preventDefault()
        addDataToServer(userDetails)
        navigate("/")
        
    }
    const addDataToServer = (data) => {
        axios.post("http://localhost:8080/userData", data).then(
            (response) => {
                console.log(response);
                alert("registered successfully");
            }, (error) => {
                console.log(error);
                alert("Operation failed");
            }
        );
    }
    const handleChange = (event)=>{
        setUserDetails({...userDetails, [event.target.name]:event.target.value })

    }
    return(
        <>
        <Dashboard role={localStorage.getItem("role")}></Dashboard>
        <form>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input onChange={handleChange} name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <label  className="form-label">select role</label>
  <select id="role" name="role" onChange={handleChange} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
  <option >select</option>
  <option value="admin">admin</option>
  <option value="employer">employer</option>
  <option value="candidate">candidate</option>
</select>
  <div className="mb-3">
    <label name="password"  className="form-label">New Password</label>
    <input onChange={handleChange} type="password" name="password" className="form-control" id="password"/>
  </div>
  
  <button  type="submit" onClick={handleSubmit} className="btn btn-primary">Register</button>
</form>
        </>
    )
}
export default Signup