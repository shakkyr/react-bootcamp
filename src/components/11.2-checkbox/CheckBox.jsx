import React from "react";


class CheckBox extends React.Component{
    constructor(props){
        super(props)
        

    this.state = {
        terms : [
        {id:1 , data: 'I read the terms of the app' , status:false},
        {id:2 , data: 'I accept the terms of the app', status:false},
        {id:3 , data: 'I want to get the weekly news later', status:true},
        {id:4 , data: 'I want to get sales and offers', status:true}
        ]
    }
    }


  
    
    checkHandler = (e)=>{
        let myTerms = this.state.terms;

        myTerms.map((term,index) =>{
            if (index === e){
                if (term.status == false){
                term.status = true;
                return this.setState({status: true})
                }else {
                    term.status = false;
                    return this.setState({status: false})
                }
            }
            
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
                        <input type='checkbox' checked={term.status} onChange={()=>{this.checkHandler(index)}}/>{term.data}
                        </li>
                    )
                })}
                </ul>
             </div>
        );
    }
}

export default CheckBox;