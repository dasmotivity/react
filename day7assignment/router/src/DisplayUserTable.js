import React from "react";
 function DisplayUserTable(props){
  console.log(props.user)
    return(<>
       <table className ="table table-striped">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">age</th>
    </tr>
  </thead>
  <tbody>
    <tr><th scope="row">{props.user.id}</th><td>{props.user.name}</td><td>{props.user.email}</td><td>{props.user.age}</td></tr>
    
  </tbody>
</table>
    </>)
}
export default DisplayUserTable