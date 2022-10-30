import React, { useState } from "react";
import DisplayUserTable from "./DisplayUserTable";

 function User(){
    let [user,setUser] = useState({id:"", name:"", mail:"", age:""})
    let [isDisplay, setIsDisplay] = useState(false)
    const handleOnSubmit = ()=>{
        setIsDisplay(true)
    }
    const handelOnchange = (event)=>{
       
        setUser({...user,[event.target.name]:event.target.value})
        event.preventDefault();
    }

    return(
        <><h1>USER COMPONENT</h1>
            <form className=" form-group" onSubmit={handleOnSubmit} action="#">
                <label>name:</label><input className="form-control" id="name" name="name" type="text" onChange={handelOnchange}></input>
                <label>id:</label><input className="form-control" id="id" name="id" type="text" onChange={handelOnchange}></input>
                <label>age:</label><input className="form-control" id="age" name="age" type="text" onChange={handelOnchange}></input>
                <label>email:</label><input className="form-control" id="email" name="email" type="text" onChange={handelOnchange}></input>
                <input className="btn btn-info" type="submit" value="Submit"></input>
            </form>

            {isDisplay && <DisplayUserTable user={user}/>}
        </>

    )
}
export default User