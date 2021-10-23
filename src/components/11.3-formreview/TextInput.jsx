import React from "react";


class TextInput  extends React.Component{
   

    textHandler =(event)=>{
this.setState({
    text:event.target.value
})
    }

    render() {
        
        return (
             <div>
                 {this.props.name}: <input id={this.props.id} type="text" onChange={this.props.textHandler} />
            </div>
        );
    }
}

export default TextInput;


// import React from 'react'


// export default function Input({ text, changeState, startValue, storage }) {

//     return (<>
//         {text} <input type="text"
//             required={true}
//             value={startValue}
//             onChange={(e) => {
//                 changeState(e.target.value)
//                 localStorage.setItem(storage, e.target.value)
//             }}
//         />
//     </>
//     )

// }