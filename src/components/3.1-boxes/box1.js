import React from "react";
import Box2 from "./box2";
import './ex3.1.css'

// const Box1 = () => {
//   return <div className ='box1'>
//        <Box2 />
//   </div>
// }

class Box1 extends React.Component {
  constructor (props){
    super(props);
  }
 render () {
   return <div className ='box1' >
        <Box2 />
       </div>
 }
}
export default Box1;