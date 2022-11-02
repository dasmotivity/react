import React from "react"
import Child from "./Child"

class LifeCycle extends React.Component{
    constructor(props){
        super(props)
        console.log("in constructor")
        this.state=({
            count:false
        })
    }
    static  getDerivedStateFromProps(props){
        console.log("getDerivedStateFromProps()")
        
        return props
    }
    componentDidMount(){
        console.log("in componentDidMount()")
    }
    componentWillUnmount(){
        console.log("in componentWillUnmount()")
    }
  
    render(){
        
        console.log("in render")
        return(<>
        parent
        <button type="submit" onClick={()=>{this.setState({count:false})}}>remove child</button>
        <button type="submit" onClick={()=>{this.setState({count:true})}}>add child</button>
        <br></br>
        {this.state.count && < Child />}
        </>
        )
    }
}export default LifeCycle