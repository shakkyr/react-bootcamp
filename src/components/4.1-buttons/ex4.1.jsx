import React from "react";
import './style.css';

const buttons = ({name,val}) => {
    return <div className='container'>
        <input type='button' value={name} style={{fontWeight:val}}  />
    </div>
}

export default buttons;