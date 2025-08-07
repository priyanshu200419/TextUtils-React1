import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
const removeBodyClasses = ()=> {
document.body.classList.remove('bg-light')
document.body.classList.remove('bg-dark')
document.body.classList.remove('bg-warning')
document.body.classList.remove('bg-danger')
document.body.classList.remove('bg-success')
};
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#800017';
      showAlert("Background color has been changed", "Success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Background color has been changed", "Success");
     // document.title = 'TextUtils';
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="TextUtils-Word counter, Character counter, Remove extra white spaces" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
