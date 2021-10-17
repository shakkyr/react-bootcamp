import React from "react";
import QuizTitle from "./QuizTitle";
import Q1 from './Q1';
import Q2 from './Q2';
import './style.css';

const container = () => {
    return <div className='container'>
      <QuizTitle /><br/>
      <Q1 />
      <Q2 />
    </div>
}

export default container;