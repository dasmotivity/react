import React from "react";
import { useState } from "react";
import Display from "./Display";

export default function EmployeeInput() {
    //    const [inputs, setInputs] = useState({})
    //     const [employees, setEmployees] = useState([])
    const [id, setId] = useState("")
    const [age, setAge] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [employees, setEmployees] = useState([])
   
    // var [isDisplay, setIsDisplay] = useState(false)
    // var onClickAdd = (event)=>{

    //     setEmployees(previousState=>{previousState.push(inputs)})
    //   console.log(employees)
    // }
    // var onClickDisplay = ()=>{
    //     setIsDisplay(!isDisplay)

    // }
    // const handelChange = (event)=>{
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setInputs(values=>({...values, [name]:value}))
    // }
    const onIdChange = (event) => {
        setId(event.target.value)
    }
    const onNameChange = (event) => {
        setName(event.target.value)
    }
    const onAgeChange = (event) => {
        setAge(event.target.value)
    }
    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const read_all_data = () => {

        reset();
    }
    const save_data = () => {

        

        let employee = {
            id: id,
            name: name,
            age: age,
            email: email
        }
        setEmployees(e=>[...e, employee])
        
        reset();

    }
    const reset = () => {
        setId("")
        setAge("")
        setEmail("")
        setName("")
    }
    const delete_data = () => {
        
        for (let i = 0; i < employees.length; i++) {

            if (employees[i].id === id) {

                employees.splice(i, 1);

            }
        }

        reset();
    }
    const update_data = () => {
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {

                employees[i].age = age;
                employees[i].name = name;
                employees[i].email = email;

            }
        }
        reset();
    }
    return (
        <div>
        <form action="#">
            <label>id:</label>
            <input name="id" type="text" onChange={onIdChange} value={id}></input><br></br>
            <label>name:</label>
            <input name="name" type="text" onChange={onNameChange} value={name}></input><br></br>
            <label>age:</label>
            <input name="age" type="text" onChange={onAgeChange} value={age}></input><br></br>
            <label>email:</label>
            <input name="email" type="text" onChange={onEmailChange} value={email}></input><br></br>
            <br></br><br></br>
            <button onClick={save_data} type="button">save data</button>
            <br></br><br></br>
            <button onClick={delete_data} type="button">delete data by id</button>
            <br></br><br></br>
            <button onClick={update_data} type="button">update data by id</button>
            <br></br><br></br>
            <button onClick={read_all_data} type="button">show all data</button>

            
        </form>
        <Display emp={employees} />
           
        </div>
    );
}









