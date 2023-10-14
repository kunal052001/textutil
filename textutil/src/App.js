//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navebar from './component/Navebar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
//import About from './component/About';


function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert =(message,type)=>{
      setAlert({
        msg:message,
        type:type
      }) 
      setTimeout(() => {
        setAlert(null)
      }, 2000);

  }
  const togglemode=()=>{
    if(mode==='light'){
         setMode('dark')
         document.body.style.backgroundColor = '#10496c';
         showAlert("Darkmode has been enabled","success");
    }
    else{
         setMode('light')
         document.body.style.backgroundColor = 'white';
         showAlert("lightmode has been enabled","success");
    }
  }
  return (
    <>
       <Navebar mode={mode}  togglemode={togglemode} />
       <Alert alert={alert}/>
       <div className="container my-3 "  >
       <TextForm showAlert={showAlert}  heading="Enter the text to Analyse" />
       </div>
       
       
       
     
    </>
    
    

  );
}

export default App;
