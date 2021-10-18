import React from "react";
import Box3 from "./box3";
// const Box2 = () => {
//   return <div className ='box2'> 3-1
//           <Box3 />
//   </div>
// }

class Box2 extends React.Component {//6-1
  constructor(props) {
    super(props);
  }
  render() {
    return <div className ='box2'>
               <Box3 />
      </div>
  }
}

export default Box2;