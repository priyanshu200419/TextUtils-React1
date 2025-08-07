import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const [emails, setEmails] = useState([]);

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    extractEmails(newText);
   props.showAlert("Text converted to uppercase","Success");
  };

  
  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    extractEmails(newText);
    props.showAlert("Text converted to lowercase","Success");
  };

  
  const handleClearClick = () => {
    const newText = "";
    setText(newText);
    setEmails([]); 
    props.showAlert("Textbox is now cleared","Success");
  };

  const handleOnChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    extractEmails(newText);
  };
  const handleCopy=()=>{
    var text=document.getElementById("my-box");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been copied","Success");
  };
  const handleextraSpace=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(""));
    props.showAlert("Extra spaces have been taken care off","Success");
  }


  const extractEmails = (inputText) => {
    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const matches = inputText.match(emailRegex);
    setEmails(matches || []);
  };

  const wordCount = text.trim().split(/\s+/).filter((el) => el.length !== 0).length;

  return (
    <>
      <div className="container my-3" style={{backgroundColor:props.mode==='dark'?'white':'#800017'}}>
        <h1 className="mb-2">{props.heading}</h1>

        <div className="mb-3">
          <label htmlFor="my-box" className="form-label">
            Enter Text Below:
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'green'}}
            id="my-box"
            rows="8"
          ></textarea>
        </div>

        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>

        <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
         <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button  disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleextraSpace}>
          Remove Spaces
        </button>
      </div>

      <div className="container my-3" style={{backgroundColor:props.mode==='dark'?'white':'#800017'}}>
        <h2>Your Text Summary</h2>
        <p>{wordCount} words and {text.length} characters</p>
        <p>{(0.008 * wordCount).toFixed(2)} Minutes read</p>

        <h2>Preview of the Entered Text</h2>
        <p>{text.length > 0 ? text : "Nothing to preview."}</p>

        <h2>Extracted Emails</h2>
        {emails.length > 0 ? (
          <ul>
            {emails.map((email, index) => (
              <li key={index}>{email}</li>
            ))}
          </ul>
        ) : (
          <p>No emails found.</p>
        )}
      </div>
    </>
  );
}
