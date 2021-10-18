import React from "react";
import './style.css';

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {x : 0 }

    }
    plus = () => {
        this.setState({
            x : this.state.x+1
        })
    }
    substract = () => {
        this.setState({
            x : this.state.x-1
        })
    }
    
    render(){
        return <div>
                <div>
                <input type="button" value="incrase" onClick = {this.plus} />
                <input type="button" value="decrease" onClick = {this.substract} />
               <span>
               {this.state.x}
                 </span>
                </div>
                
                
            
             
        </div>
    }
}


export default Counter;

