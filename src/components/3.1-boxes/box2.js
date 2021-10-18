import React from "react";
import Box3 from "./box3";
// const Box2 = () => {
//   return <div className ='box2'>
//           <Box3 />
//   </div>
// }

class Box2 extends React.Component {
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