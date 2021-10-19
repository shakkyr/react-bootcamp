import React from "react";

class Cycle extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            favoriteColor : 'blue'
        }
    }
    componentDidMount (){
        setTimeout(() =>{
            this.setState({favoriteColor:'white'})
        },1000)
    
    }

    componentDidUpdate (){
        document.querySelector('#lifeCycle').innerHTML =
        `<h2>the updated color is ${this.state.favoriteColor}</h2>`       
    }
    render() {
        return (
            <>
             <h1>my favorite Color is {this.state.favoriteColor}</h1>
              <div id="lifeCycle"></div>
              </>
        )
    }
}
export default Cycle;