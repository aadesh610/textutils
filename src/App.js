
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setmode]= useState('light'); //whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(()=> {
      setAlert(null);
    },1500);
  }

  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor= '#2e3133';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setmode('light')
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
    
        {/* <Navbar title="Textutiles" aboutText="About Textutiles" togglemode={togglemode}  mode={mode}/>

        <Alert alert={alert}/>
        <div className="container my=3">
       
              <Textform heading="Enter your text here to analyze" mode={mode} showAlert={showAlert}/>
            <About/>
        </div> */}

<BrowserRouter>
<Navbar title="Textutiles" aboutText="About Textutiles" togglemode={togglemode}  mode={mode}/>
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element = <About mode={mode}/> />
            <Route path="/" element=<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /> />
          </Routes>
        </div>
      </BrowserRouter>

    </>
   
  );
}

export default App;
