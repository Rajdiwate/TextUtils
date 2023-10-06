import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here')
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase" , "success")
    }
    const handleLoClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase" , "success")
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    
    return (
        <>
            <div className={`container my-3 text-${props.mode==='light'?'dark' : 'light'}`}>
                <h1>{props.heading}</h1>

                <div className="mb-3">

                <textarea className={`form-control text-${props.mode==='light'?'dark' : 'light'} bg-${props.mode}` } value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-success mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-success mx-2" onClick={handleLoClick}>Convert to Lowercasen</button>
                <button className="btn btn-success mx-2" onClick={speak}>speak</button>
            </div>
            <div className ={`container my-3 text-${props.mode==='light'?'dark' : 'light'}`}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words  and {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>


        </>

    );
}
