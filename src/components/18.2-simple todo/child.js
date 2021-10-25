import React from 'react'

const ChildObj = ({name, completed, changeStatu}) => {

    const clickHandler = ()=> {
        changeStatu(name)
    }
    return (
        
            <div> name: <span  style ={{textDecoration: completed ? 'line-through' : 'none'}} >{name} </span> <input 
                                 type ="button"
                                  value={completed ? 'Done' : 'Not Yet' }
                                   onClick={clickHandler} 
                                  /> </div>
        
        )
}

export default ChildObj