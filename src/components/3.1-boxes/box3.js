import React from "react";
import Box4 from "./box4";

// const Box3 = () => {
//   return <div className ='box3'> 3-1
//   <Box4 />
//   <Box4 />
//   </div>
// }

class Box3 extends React.Component {//6-1
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