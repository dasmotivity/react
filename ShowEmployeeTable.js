import React from "react";

class ShowEmployeeTable extends React.Component {

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr><th>id</th><th>name</th><th>email</th><th>age</th></tr>
                    </thead><tbody>
                        {
                            this.props.emps.map((e) => {
                               
                                return <tr><td>{e.id}</td><td>{e.name}</td><td>{e.email}</td><td>{e.age}</td></tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ShowEmployeeTable;