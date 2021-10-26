import React from "react";
import axios from "axios";
class MyApp extends React.Component {
state ={
    todos: []
}
   async componentWillMount() {
          let result =await axios.get('https://jsonplaceholder.typicode.com/todos')
    }
    render() {
    return(
        <div className='container'>
           {this.state.todos.length > 0? (<div>{this.state.todos.length}</div>)} : <div className="spinner-border text-primary" role="status">
   <span className="sr-only"></span>
</div>
        </div>
        )
}
}

export default MyApp;

