import React from "react";


class CheckBox extends React.Component{
    constructor(props){
        super(props)
        

    this.state = {
        terms : [
        {id:1 , data: 'I read the terms of the app' , status:''},
        {id:2 , data: 'I accept the terms of the app', status:''},
        {id:3 , data: 'I want to get the weekly news later', status:"checked"},
        {id:4 , data: 'I want to get sales and offers', status:"checked"}
        ]
    }
    }


    componentDidMount (){
        
    }
    
    checkHandler = (e)=>{
        this.setState({
         status:e.target.checked
        })
    }

    render() {
        let myTerms = this.state.terms;
        return (
             <div>
                 <ul >
                 {myTerms.map((term,index) => {
                    return (
                        <li key={term.id} style={{listStyle:'none'}} >
                        <input type='checkbox' checked={term.status} onChange={this.checkHandler}/>{term.data}
                        </li>
                    )
                })}
                </ul>
             </div>
        );
    }
}

export default CheckBox;