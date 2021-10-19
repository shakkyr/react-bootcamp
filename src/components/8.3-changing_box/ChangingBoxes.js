import React from 'react'
import './ChangingBoxes.css'

const colors = ['green', 'red', 'yellow', 'blue', 'grey'];

class ChangingBoxes extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            background:colors[i],
            borderRadius: '0',
            i:0

        }
    }
componentDidMount (){
    setInterval(()=> {
    if(this.state.i >=colors.length-1){
        this.setState({i:0 ,borderRadius:'50%' })
    }
    this.setState({i:this.state.i +1})
},1000);
}
    render(){
        return (
            <div>
                <div className="box" 
                        style={{width:this.props.width,
                            height:this.props.height,
                                background:this.state.background,
                                borderRadius:this.state.borderRadius}}>
                                    </div>
            </div>
        )
    }
}

export default ChangingBoxes;