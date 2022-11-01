import Dashboard from "./Dashboard"

function Admin(){
    return(
        <div>
        <Dashboard role={localStorage.getItem("role")}></Dashboard>

        </div>
    )
}
export default Admin