import React from "react";

class Buttons extends React.Component {
 

  render() {
    return (
      <div>
        <input
          className="confirmButton"
          type="button"
          value="continue"
          onClick={this.props.confirmHandler}
          style={{display:'inlineBlock'}}
        />
      </div>
    );
  }
}

export default Buttons;

// import React from 'react'

// export default function Submit() {
//     return (
//         <div>
//             <input type="submit" value="Submit"/>
//         </div>
//     )
// }
