import React from "react";
import Box4 from "./box4";

// const Box3 = () => {
//   return <div className ='box3'>
//   <Box4 />
//   <Box4 />
//   </div>
// }

class Box3 extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return <div className='box3'>
      <Box4 />
      <Box4 />
    </div>
  }
}

export default Box3;