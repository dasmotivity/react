import React, { useState } from "react";
import DisplayUserTable from "./DisplayUserTable";

 function Company(){

    let [company,setCompany] = useState({id:"", name:"", mail:""})
   
    let [isDisplay, setIsDisplay] = useState(false)
    const handleOnSubmit = (event)=>{
        setIsDisplay(true)
        event.preventDefault();
    }
    const handelOnchange = (event)=>{
     
        setCompany({...company,[event.target.name]:event.target.value})
      
        event.preventDefault();
    }
    
    return(
        <>
            <h1>Company COMPONENT</h1>
            <form className=" form-group" onSubmit={handleOnSubmit} action="#">
                <label>name:</label><input className="form-control" id="name" name="name" type="text" onChange={handelOnchange}></input>
                <label>id:</label><input className="form-control" id="id" name="id" type="text" onChange={handelOnchange}></input>
                <label>email:</label><input className="form-control" id="email" name="email" type="text" onChange={handelOnchange}></input>
                <input className="btn btn-info" type="submit" value="Submit"></input>
            </form>

            {isDisplay && <DisplayUserTable com={company}/>}
        </>

    )
}
export default Company