import React, { useState } from 'react';

export default function About(props) {
  // const [darkMode, setDarkMode] = useState(false);

  // const myStyle = {
  //   color: darkMode ? 'white' : 'red',
  //   backgroundColor: darkMode ? '#212529' : 'blue',
  //   transition: 'all 0.5s ease'
  // };
  let myStyle={
  color:props.mode=== 'dark'?'white':'black',
  backgroundColor:props.mode==='dark'?'black':'white',
  border:'2px solid',
  borderColor:props.mode=== 'dark'?'white':'black',
  }

  return (
    <>
      <div className="container" style={myStyle}>
        <h1 className="my-3">About Us.</h1>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
           <strong>Analyze your text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
TextUtils gives a way to manipulate the entered text in whatever way we want by selecting the options available to us.              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
               <strong>Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"  style={myStyle}>
This utility is free to use .No extra cost is required to operate this website to manipulate your text.              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Browser compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"  style={myStyle}>
This utility is multi-browser comapatible.It works on browsers such as chrome,firefox and many more and can be used to manipulate texts even on documents such as pdf files and etc.              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
