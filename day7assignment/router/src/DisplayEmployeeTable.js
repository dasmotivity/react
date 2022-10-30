import React from "react";
 function DisplayEmployeeTable(props){
    let e = props.emp;  
    return(<>
       <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">age</th>
    </tr>
  </thead>
  <tbody>
    <tr><th scope="row">{e.id}</th><td>{e.name}</td><td>{e.email}</td><td>{e.age}</td></tr>
    
  </tbody>
</table>
    </>)
}
export default DisplayEmployeeTable