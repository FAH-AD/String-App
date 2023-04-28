
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import { 
  BrowserRouter as Router,
  Routes,
  Route

 } from 'react-router-dom';
function App() {
  const [mode,setMode]=useState('light')
 
  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor='white'
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='#474545'
    }
  }
  
  return (
    <Router>
    <>
   
     <Navbar title='Text_works' about='About' home='Home' mode={mode} toggle={toggleMode}/> 
    
    <div className="container">
    <Routes>
        <Route exact path="/about" element={<About mode={mode} />}/>
          <Route exact path="/" element=
         {<TextArea heading='Enter text below to Analyze' mode={mode}/>}/>
          
     </Routes>
      
    
    </div>
    
    </>
     </Router> 
    
  );
}

export default App;
