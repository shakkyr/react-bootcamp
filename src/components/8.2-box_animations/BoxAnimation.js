import React from 'react';
import './BoxAnimation.css'

class BoxAnimation extends React.Component{
    constructor(props){
        super(props);
        this.state = {display : 'none'

        }
    }

    componentDidMount (){
        setTimeout(() =>{
            this.setState({display:'block'})
        },1000)
      
        
    }
    componentDidUpdate (){

        setTimeout(() =>{
            this.setState({display:'none'})
        },6000)
    }

    render() {
        return (
            <div>
                <div
                    className="box" 
                        style={{width:this.props.width,
                            height:this.props.height,
                                background:this.props.background ,
                                    display:this.state.display}}>

                </div>
            </div>
        )
    }
}


export default BoxAnimation;