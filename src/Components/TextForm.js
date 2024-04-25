import React from 'react'
import { useState } from 'react'
export default function TextForm(props) {
    let [text, setText] = useState("Enter Text Here...")
    const del = () => {
        setText(text)
        text = setText("")
        props.showAlert("Text Deleted", "success")
    }
    const upper = () => {
        text = text.toUpperCase()
        setText(text)
        props.showAlert("Converted to UPPERCASE", "success")
    }
    const lower = () => {
        text = text.toLowerCase()
        setText(text)
        props.showAlert("Converted to LOWERCASE", "success")
    }
    const capitalized = () => {
        text = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
        setText(text)
        props.showAlert("Converted to CAPITALIZEDCASE", "success")
    }
    const handler = (e) => {
        setText(e.target.value)
    }
    const copy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Text Copied!", "success")
        
    }
    return (
        <>
            <div>
                <div className='container my-3'>
                    <h1>{props.heading}</h1>
                    <textarea  mode={props.mode} value={text} onChange={handler} className="form-control" id="myBox" rows="8"></textarea>
                    <button disabled={text.length===0} className='btn btn-primary mx-3 my-1' onClick={del}>DEL</button>
                    <button disabled={text.length===0} className='btn btn-primary mx-3 my-1' onClick={upper}>UPPERCASE</button>
                    <button disabled={text.length===0} className='btn btn-primary mx-3 my-1' onClick={lower}>LOWERCASE</button>
                    <button disabled={text.length===0} className='btn btn-primary mx-3 my-1' onClick={capitalized}>CAPITALIZEDCASE</button>
                    <button disabled={text.length===0} className='btn btn-primary mx-3 my-1' onClick={copy}>COPY TEXT</button>
                </div>
            </div>
            <div className="container my-3">
                <h2>About Text</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Word's & {text.length} Character's </p>
                <h3 >Reading Accuracy</h3>
                <p>
                    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute's Read</p>
                </p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Uh-oh! It Looks like you haven't entered any Text. Please Entered some Text to Preview."}</p>
            </div>
        </>
    )
}