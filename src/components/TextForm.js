import React from 'react'
import { useState } from "react"

export default function TextForm(props) {
    const handleupclick = () =>{
        // console.log("UpperCase Was click" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleloclick = () =>{
        // console.log("UpperCase Was click" + text);
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleclearclick = () =>{
        // console.log("UpperCase Was click" + text);
        let newtext ='';
        setText(newtext);
    }
    const handlecopyclick = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        
    }
    const handleOnchange = (event) =>{
        // console.log("on change");
        setText(event.target.value);
    }
    const [text,setText] = useState('Enter text here')
  return (
    <>
    <div>
        <h1>{props.handing}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2'onClick={handleupclick}>Convert to UpperCase</button>
            <button className='btn btn-primary mx-2'onClick={handleloclick}>Convert to LowerCase</button>
            <button className='btn btn-primary mx-2'onClick={handleclearclick}>Clear Text</button>
            <button className='btn btn-primary mx-2'onClick={handlecopyclick}>Copy Text</button>
    </div> 
    <div className='container my-3'>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} word and {text.length} character</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h1>Preview</h1>
        <p>{text}</p>
    </div>
    </>
  )
}
