import React from "react";
import Button from "./CustomButton";

const colors = ['blue','red','yellow'];

class Parent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            color : null
        }
    
    }

    onColorClick = (e)=>{
        this.setState({
            color: e
        })
    }

    render() {
        return (
             <div>
             {colors.map((color, index)=>{
               return  <Button func={this.onColorClick} color={color} key={index} />
             })}
             <h1> the color you choose is :<span style={{color:this.state.color}}> {this.state.color} </span></h1>
             </div>
        );
    }
}

export default Parent