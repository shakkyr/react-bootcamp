import React, {useState} from 'react'

const TexTask = ()=> {
    const [text, setText] = React.useState('asdasd adsdas afas; asdlakd ama;lsdm;a ;amd ;lad ;amsm;as ;lasd ;lm ;amsdl;ma;sdm nklasndlkn asfnjfbjgb aslkfllka hhALKHDAF')
    const [textLength, setTextLength] = React.useState(20)

    const seeAll = ()=>{
        textLength !== text.length ? setTextLength(text.length) : setTextLength(20)
        
    }
    return (
        <div>
            {text.substring(0, textLength)}
            <a onClick={seeAll} style={{color:'red'}}>{textLength !== text.length ? 'read more' : 'show less'}</a>
        </div>
        )
}

export default TexTask