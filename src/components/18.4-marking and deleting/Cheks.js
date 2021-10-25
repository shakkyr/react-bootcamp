import React, {useState} from 'react'



const arr= ["one", "two", "three", "four", "five"];

const CheckBoxes = ()=> {

    const [boxes, setBoxes] = useState([])

    const assignColorToCheckBoxes = arr.map(ele=> {
        return (
            <div>
                <li>
             <input type="checkbox"
                    // checked={checked}
                    // onChange={handleChange}
                    />
            
              <label>{ele}</label>
               </li>
            

            </div>
        )
    })
    return (
        <div>{assignColorToCheckBoxes}</div>
        )
}

export default CheckBoxes;
