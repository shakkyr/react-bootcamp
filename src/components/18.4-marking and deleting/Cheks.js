import React, {useState} from 'react'
import Clicks from './inputs'



const CheckBoxes = ()=> {

    const [boxes, setBoxes] = useState(
        ["one", "two", "three", "four", "five"]
    )

    const assignColorToCheckBoxes = boxes.map(ele=> {
        return (
            <div>
                
                <Clicks label={ele} />
              
               
            

            </div>
        )
    })
    return (
        <div>{assignColorToCheckBoxes}</div>
           
    
        )
}

export default CheckBoxes;
