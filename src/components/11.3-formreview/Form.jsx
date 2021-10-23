import React from "react";
import TextInput from "./TextInput";
import SelectTag from "./SelectTag";
import AreaText from "./AreaText";
import Buttons from "./Buttons";
import './style.css'

class Form extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            firstName:null,
            lastName:null,
            age:null,
            freeText:null,
            show: 'none'
        }
    }
    textHandler = (childData) => {
        if(childData.target.id === 'firstName'){
        this.setState({firstName: childData.target.value})
        } else if(childData.target.id === 'lastName') {
            this.setState({lastName: childData.target.value})
        }else {
            this.setState({ freeText: childData.target.value})
        }
    }

    handleChange= (event) => {
        this.setState({
            age:event.target.value
        })
    }

    confirmHandler =(event)=> {
        if(event.target.id==='send'){
            alert('your data has sent')
        }
        else {

        if (this.state.show === true){
        this.setState({
            show:'none'
        })
        } else {
            this.setState({
                show:true
            })
        }}
    }

    render(){
    return(
        <div className="FormApp">
            <TextInput name='First Name' id='firstName'  textHandler = {(event)=>this.textHandler(event)} />
            <TextInput name='Last Name' id='lastName'  textHandler = {(event)=>this.textHandler(event)}/>
            <SelectTag handleChange = {(event)=> this.handleChange(event)} />
            <AreaText textHandler = {(event)=>this.textHandler(event)} />
            <Buttons confirmHandler = {(event)=>this.confirmHandler(event)} />

            <div className="FinalReview" style={{display:this.state.show}}>
             <h1> IS your data correct!!!</h1>
            <h4>{this.state.firstName}</h4>
            <h4>{this.state.lastName}</h4>
            <h4>{this.state.age}</h4>
            <h4>{this.state.freeText}</h4>
            <input
                className="backButton"
                type="button"
                id='back'
                value="Back"
                onClick={(event)=>this.confirmHandler(event)}
            />
            <input
                className="sendButton"
                type="button"
                id='send'
                value="Send Survey"
                onClick={(event)=>this.confirmHandler(event)}
           />
            
            </div>

        </div>
    )
    }
}

export default Form;

// import React, { useState } from 'react'
// import Input from './TextInput'
// import TextArea from './AreaText'
// import Select from './SelectTag'
// import Submit from './Buttons'
// // import "./style.css"

// export default function Form() {

//     const [firstName, setFirstName] = useState(setStateVal("first-name")),
//         [lastName, setLastName] = useState(setStateVal("last-name")),
//         [textArea, setTextArea] = useState(setStateVal("free-text")),
//         [age, setAge] = useState(setStateVal("age", 1)),
//         [displayForm, setDisplayForm] = useState(true);


//     const finishForm = async (e) => {
//         e.preventDefault();
//         setDisplayForm(!displayForm)
//     }

//     function setStateVal(name, val = "") {
//         return localStorage.getItem(name) ? localStorage.getItem(name) : val
//     }

//     return displayForm ? (
//         <form className="form" onSubmit={(e) => finishForm(e)}>
//             <Input startValue={firstName} text="first Name:" changeState={setFirstName} storage="first-name" /><br />
//             <Input startValue={lastName} text="last Name:" changeState={setLastName} storage="last-name" /><br />
//             <Select startValue={age} range={100} text="age:" changeState={setAge} />
//             <TextArea startValue={textArea} text="free text" changeState={setTextArea} />
//             <Submit />
//         </form>
//     ) :
//         (
//             <div className="form">
//                 <h2>REVIEW</h2>
//                 <h3>first name: {firstName}</h3>
//                 <h3>lastName name: {lastName}</h3>
//                 <h3>age: {age}</h3>
//                 <h3>freetext: {textArea}</h3>
//                 <div>
//                     <input type="submit" value="Back" onClick={(e) => finishForm(e)}></input>
//                     <input type="submit" value="Send survey" onClick={() => {
//                         localStorage.clear()
//                         window.location.reload()
//                     }}></input>
//                 </div>
//             </div>
//         )

// }