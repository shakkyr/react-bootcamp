import React from 'react';
import {data} from './data';
import Names from './Names';
import Ages from './Ages';


class Parent extends React.Component{
    constructor(props){
        super(props);
        
        this.state ={
            ages:[],
            names:[]
        }
        
    

    }
 componentDidMount(){
    //  const names = this.nameArr()
     this.setState({
         ages:this.ageCheck(),
         names:this.nameArr()
     })
    }

    nameArr = ()=> {
        let myNames= data.map(e=>{
              return e.name
          })
          return myNames
      }

    ageCheck = ()=> {
        let myAges= data.filter(ele=> {
            if(ele.birthday.split('-')[2]<1990){
                return ele
        }
        })
        return myAges
    }
    
    render() {
        return (
            <div>
               <Names names={this.state.names}/>
               <Ages  ages={this.state.ages}/>
           </div>
        );
    }
}

export default Parent;