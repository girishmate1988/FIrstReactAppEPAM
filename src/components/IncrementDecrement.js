import { render } from "@testing-library/react";
import React from "react";

class IncrementDecrement extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            
                <h5>The Counter is a {this.props.currentnumber >= 0? "Positive":"Negative" } number</h5>
            
        )
    }
    
}
export default IncrementDecrement