import React from "react";
import './ChuckNoriis.css'

class Myjoke extends React.Component {
    constructor (props) {
        super(props);
        this.myjoke = this.myjoke.bind(this);

        this.state = {
            norris : ''
        }
    }
    
    componentDidMount() {this.myjoke()}
    myjoke = async  () =>  {
        
        let joke =await (await fetch(`https://api.chucknorris.io/jokes/random`)).json();
       
        this.setState ({
        norris : joke
        
        
        })

    }

    // myjoke2 = async () => {
    //     let categ =await (await fetch(`https://api.chucknorris.io/jokes/categories`)).json();
    //     let selected =await (await fetch(`https://api.chucknorris.io/jokes/random?category={category}`)).json();
    //     this.setState({

    //     })
    // }
    render () {
        return (
            <div>
            <div>
            <input type="button" value="click for a random chuck norris joke" onClick={this.myjoke} />
            </div>
            <div><h2>{this.state.norris.value}</h2></div>
            </div>)
}}
export default Myjoke;





// import React from "react";

// class Chuck extends React.Component {
//   state = { joke: "Loading...", value: null };

//   handler2 = async () => {
//     this.setState({ joke: "Loading..." });
//     const joke = await (
//       await fetch("https://api.chucknorris.io/jokes/random")
//     ).json();
//     this.setState({ joke: joke.value });
//   };
//   handler = async (e) => {
//     const select = document.querySelector("select");
//     this.setState({ joke: "Loading..." });
//     const joke = await (
//       await fetch(
//         `https://api.chucknorris.io/jokes/random?category=${select.value}`
//       )
//     ).json();
//     this.setState({ joke: joke.value });
//   };
//   async componentDidMount() {
//     this.setState({ joke: "Loading..." });
//     const joke = await (
//       await fetch("https://api.chucknorris.io/jokes/random")
//     ).json();
//     this.setState({ joke: joke.value });
//     const select = document.querySelector("select");
//     const arr = await (
//       await fetch("https://api.chucknorris.io/jokes/categories")
//     ).json();
//     arr.forEach((cat) => {
//       select.innerHTML += `<option value=${cat}>${cat}</option>`;
//     });
//   }
//   render() {
//     return (
//       <>
//         <input
//           onClick={this.handler2}
//           type="button"
//           value="random chuck norris joke"
//         />
//         <div>
//           <select onChange={this.handler}></select>
//           <input onClick={this.handler} type="button" value="Click" />
//         </div>
//         <div className="flex">
//           <div className="one"></div>
//           <p className="line-clamp">{this.state.joke}</p>
//           <div className="two"></div>
//         </div>
//       </>
//     );
//   }
// }
// export default Chuck;
