
import './App.css';
import Alert from './componants/Alert';
import About from './componants/About';
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from "react-router-dom"

function App() {

  const [mode, setMode] = useState("light");
  // const [btnText , setBtnText] = useState('Enable Greymode');
  const [alert, setAlert] = useState(null);


  const showAlert = (messege, type) => {
    setAlert({
      msg: messege,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      // setBtnText('Enable Lightmode');
      document.body.style.backgroundColor = "grey"
      showAlert("Darkmode has been enabled", "success")
      document.title = "Darkmode TextUtils";
    }
    else {
      setMode('light');
      // setBtnText('Enable Greymode');
      document.body.style.backgroundColor = "white"
      showAlert("Lightmode has been enabled", "success")
      document.title = "Lightmode TextUtils";
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About TestUtils" toggleMode={toggleMode} mode={mode} />
        <Alert alert={alert} />
        <div className='container '>
          <Routes>

            <Route exact path="/about" element={<About />}>
            </Route>

            <Route exact path='/' element= {<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />}> 
            </Route>
          </Routes>
        </div>
        {/* <About/> */}
      </Router>
    </>
  );
}

export default App;
