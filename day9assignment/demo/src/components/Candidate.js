import Dashboard from "./Dashboard"

const Candidate=()=>{
    return(
        <div>
            <Dashboard role={localStorage.getItem("role")}></Dashboard>
        </div>
    )
}
export default Candidate