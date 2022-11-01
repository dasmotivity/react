import Dashboard from "./Dashboard"

function Candidate(){
    return(
        <div>
            <Dashboard role={localStorage.getItem("role")}></Dashboard>
        </div>
    )
}
export default Candidate