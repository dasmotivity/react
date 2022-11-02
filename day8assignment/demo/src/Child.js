import React from "react";

class Child extends React.Component{
    constructor(props){
        super(props)
        console.log("in child constructor")
    }
   
static getDerivedStateFromProps(){
    console.log("child  getDerivedStateFromProps()")
    return ""
}
componentDidMount(){
    console.log("child in componentDidMount()")
}
componentWillUnmount(){
    console.log("child in componentWillUnmount()")
}
    render(){
        console.log("in child render")
        return(
            <>child</>
        )
    }
}export default Child