import React, {useState} from "react";
import ChildObj from "./child";

const ToDo = ()=> {
    const [ object , setObject] = React.useState(
        [
            { name: "CSS", completed: true },
            { name: "JavaScript", completed: true },
            { name: "Learn React", completed: false },
            { name: "Learn mongoDB", completed: false },
            { name: "Learn Node JS", completed: false },
            ]
    )

    const handleChange = (name)=> {
       const copyobject = [...object];
       const result = copyobject.find(ele=>{
           return ele.name === name
       })
     result.completed =!result.completed 

     setObject(copyobject)
    
    }
    return (
          <div>
              {
                  object.map(ele => {
                      return <ChildObj name ={ele.name} completed={ele.completed} changeStatu={handleChange}/> 
                  })
                  }
          </div>  
        )
}

export default ToDo;