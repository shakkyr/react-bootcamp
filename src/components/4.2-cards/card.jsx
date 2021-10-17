import React from 'react';
import './style.css'


const card = ({num,title,description}) => {
    return <div className='container'>
        <img src={`/img/${num}.jpg`}/>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="">Share</a>
        <a href="">Explore</a>
    </div>
}

export default card;