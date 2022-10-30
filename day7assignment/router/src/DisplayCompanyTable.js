import React from "react";
 function DisplayCompanyTable(props){
    const company = props.com;
    return(<>
       <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      
    </tr>
  </thead>
  <tbody>
    <tr><th scope="row">{company.id}</th><td>{company.name}</td><td>{company.email}</td></tr>
    
  </tbody>
</table>
    </>)
}
export default DisplayCompanyTable