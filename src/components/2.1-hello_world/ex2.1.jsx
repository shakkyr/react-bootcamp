import React from "react";

const data = ["hello", "world"];
const number1 = 5;
const number2 =6;
const string = 'I love React!';

 export const ex21 = ()=> {
    return(
         <div>
         {
            data.join(' ')
           }
           <br/>
           {
                `${number1} + ${number2} = ${number1 + number2}`
            }
            <br/>
           {
                `the strings length is ${string.length}`
            }
    </div>
    )
}

export default ex21;
