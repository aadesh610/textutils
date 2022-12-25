import React, { useState } from 'react';



export default function Textform(props) {
    const handleUpClick =()=>{
        // console.log("uppercase was  clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLoClick =()=>{
        // console.log("uppercase was  clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!","success");
    }

    const handleOnChange = (event)=>{
        // console.log("On change")
        setText(event.target.value);
    }

    const handelCopy =() =>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!","success");
    }


    const [text, setText] = useState('');
    
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'? 'white' :'black'}}>
        <h1>{props.heading}  </h1>
        <div className="mb-3">
        
        <textarea className="form-control" value={text} id="myBox" rows="9" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? '#858d95' :'white',color: props.mode==='dark'? 'white' :'black' }}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick} >Convert to upper Case</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleLoClick} >Convert to lower Case</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handelCopy} >Copy Text</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'? 'white' :'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>The above text takes {0.003 * text.split(" ").filter((element)=>{return element.length!==0}).length} mnutes to read for an average reader.</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read this above text if you are a slow reader.</p>
        <h2>Preview</h2>
        <p>{text.length>0? text: "Enter Something to preview it here"}</p>
    </div>
</>
  )
}
