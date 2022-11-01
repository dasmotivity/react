import Dashboard from "./Dashboard"
function Employer(){
    return(
        <div>
          <Dashboard role={localStorage.getItem("role")}></Dashboard>

        </div>
    )
}
export default Employer