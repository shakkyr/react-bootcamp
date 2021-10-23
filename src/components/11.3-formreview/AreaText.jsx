import React from "react";


class AreaText  extends React.Component{
 

    render() {
        return (
             <div>
                 Free Text: <textarea onChange={this.props.textHandler} />
             </div>
        );
    }
}

export default AreaText;

// import React from 'react'

// export default function TextArea({ text, changeState, startValue}) {
//     return (
//         <>
//             {text} <textarea
//                 value={startValue}
//                 onChange={(e) => {
//                     changeState(e.target.value)
//                     localStorage.setItem("free-text", e.target.value)
//                 }}
//             ></textarea>
//         </>
//     )
// }