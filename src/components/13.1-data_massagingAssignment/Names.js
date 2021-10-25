import React from "react";

class Names extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div>
                Names: {(this.props.names).join(", ")}
            </div>
        )
    }
}

export default Names;