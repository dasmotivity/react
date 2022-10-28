import React from "react";

function Display(props) {
    var k=0;
  
    return (
        <div>{
             <table>
                <thead>
                    <tr><th>id</th><th>name</th><th>email</th><th>age</th></tr>
                </thead><tbody>
                    {
                        props.emp.map((e) => {
                            k = k + 1
                            return(<tr key={k}><td>{e.id}</td><td>{e.name}</td><td>{e.email}</td><td>{e.age}</td></tr>)
                        })
                    }
                </tbody>
            </table>
}
            
        </div>
    )
}

export default Display