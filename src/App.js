
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [alert,setAlert]=useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }  
  return(
    <>
    <Navbar title="WordSnap" aboutText="About Us" />
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm  showAlert={showAlert} heading="Enter here text to analyze"/>
    </div>
    
    </>
  );
  
}

export default App;
