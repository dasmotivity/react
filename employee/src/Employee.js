import React from "react";
import ShowEmployeeTable from "./ShowEmployeeTable";
class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            age: "",
            email: "",
            employees: []
        }
    }


    onIdChange(event) {
        this.setState({ id: event.target.value });
    }
    onAgeChange(event) {
        this.setState({ age: event.target.value });
    }
    onEmailChange(event) {
        this.setState({ email: event.target.value });
    }
    onNameChange(event) {
        this.setState({ name: event.target.value });
    }
    deleteData() {
        let employees = this.state.employees;
        for (let i = 0; i < employees.length; i++) {
         
            if (employees[i].id === this.state.id) {
                
                employees.splice(i, 1);
                
            }
        }
        
        this.reset();
    }
    updateData() {
        let employees = this.state.employees;
        for (let i = 0; i < employees.length; i++) {
            console.log(employees[i].id);
            console.log(this.state.id);
            if (employees[i].id === this.state.id) {
              
                employees[i].age = this.state.age;
                employees[i].name = this.state.name;
                employees[i].email = this.state.email;
                
            }
        }
       
        

        this.reset();
    }
    readAllData() {
       
        
        this.reset();
    }
    save_Data() {

        let employees = this.state.employees;

        let employee = {
            id: this.state.id,
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }
        employees.push(employee);
        
        this.reset();
        
    }
    reset() {
        this.setState({ id: "", name: "", email: "", age: "" })

    }
    render() {
        return (
            <div><h1>Employee create form</h1>
                <form>
                    <label>id:</label>
                    <input name="id" type="text" onChange={(event) => this.onIdChange(event)} value={this.state.id}></input><br></br>
                    <label>name:</label>
                    <input name="name" type="text" onChange={(event) => this.onNameChange(event)} value={this.state.name}></input><br></br>
                    <label>age:</label>
                    <input name="age" type="text" onChange={(event) => this.onAgeChange(event)} value={this.state.age}></input><br></br>
                    <label>email:</label>
                    <input name="email" type="text" onChange={(event) => this.onEmailChange(event)} value={this.state.email}></input><br></br>
                    <br></br><br></br>
                    <button onClick={this.save_Data.bind(this)} type="button">save data</button>
                    <br></br><br></br>
                    <button onClick={this.deleteData.bind(this)} type="button">delete data by id</button>
                    <br></br><br></br>
                    <button onClick={this.updateData.bind(this)} type="button">update data by id</button>
                    <br></br><br></br>
                    <button onClick={this.readAllData.bind(this)} type="button">show all data</button>
                    
                    <ShowEmployeeTable emps={this.state.employees} />
                    
                </form>
            </div>
        )
    }
}

export default Employee;