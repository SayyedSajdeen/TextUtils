import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alert from './Components/Alerts';
import { useState } from 'react';
import {Routes, Route, BrowserRouter } from 'react-router-dom';  
import Contact from './Components/Contact';

function App() {  
  let [mode, setMode] = useState('light') //Whether Dark Mode is Enable or Not.
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 2000)
  }
  const toggleMode = () =>{
  // var imageUrl = 'black.jpg';
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      document.body.style.backgroundImage = `url(black.jpg)`
      document.body.style.backgroundRepeat = 'no-repeat'
      document.body.style.backgroundSize = 'cover'
      document.body.style.color = 'white'
      document.title = "Text Analyzer/DarkMode"
      showAlert("Dark Mode Enabled", "success" )
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      document.title = "Text Analyzer/LightMode"
      showAlert("Dark Mode Disabled", "success")
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About TextAnalyzer" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter the Text Below To Analyze" mode={mode} />}></Route>
      <Route path='/About' element={<About mode={mode}/>}></Route>
      <Route path='/Contact' element={<Contact mode={mode}/>}></Route>
      </Routes>    
      </BrowserRouter>
      </>
  );
}
export default App;