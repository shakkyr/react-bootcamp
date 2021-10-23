import React from "react";


class SelectTag  extends React.Component{
   
    render() {
        return (
             <div>
                 Age:  <select
              name="age"
              id="age"
              onChange={this.props.handleChange}
            >
              <option value="0-15">0-15</option>
              <option value="16-25">16-25</option>
              <option value="26-40">26-40</option>
              <option value="41+">41+</option>
            </select>
             </div>
        );
    }
}

export default SelectTag;


// import React from 'react'

// export default function Select({ text, changeState, range, startValue}) {


//     return (
//         <div>
//             {text} <select required={true}
//                 value={startValue}
//                 onChange={(e) => {
//                     changeState(e.target.value)
//                     localStorage.setItem("age", e.target.value)
//                 }}>
//                 {Array.from(Array(range).keys()).map(val => <option key={val} value={val}>{val}</option>)}
//             </select>
//         </div >
//     )
// }