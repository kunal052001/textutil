import React,{useState} from 'react'

export default function TextForm(props) {
  
          const handleUpClick =()=>{
            //console.log("up click");
            let newText= text.toUpperCase();
            setText(newText)
            props.showAlert("Converted to lower uppercase","success");
            }
            const handlelowClick =()=>{
              //console.log("up click");
              let newText= text.toLowerCase();
              setText(newText)
              props.showAlert("converted to lower case","success");
            }
            const handleClearClick =()=>{
              //console.log("up click");
              let newText= "";
              setText(newText)
              props.showAlert("Text cleared successfully","success");
            }
            const handleCopyClick =()=>{
              //console.log("i am copy")
              var text=document.getElementById("mybox");
              text.select();
              
              navigator.clipboard.writeText(text.value)
              props.showAlert("copied to clickbord","success");
              
            }
          const handleOnChange = (event)=> {
            //console.log("handle on change");
            setText(event.target.value)
          }
          const handleExtraSpaces=()=>{
            let newText =text.split(/[ ]+/);
            setText(newText.join(" "))
            props.showAlert("removed extra spaces","success");
          }
  const [text, setText] = useState('');
  return (
    <>
    <div className='container' >
         <h1>{props.heading}</h1>
          <div className="mb-3">
             <textarea className="form-control" value={text} onChange={handleOnChange } id="mybox" rows="12 "></textarea>
          </div>

          <button className="btn btn-primary mx-2" onClick={handleUpClick} > TO CAMEL CASE</button>
          <button className="btn btn-primary mx-2" onClick={handlelowClick} > TO lower case</button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick} > Clear</button>
          <button className="btn btn-primary mx-2" onClick={handleCopyClick} > COPY</button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} > Remove extra spaces</button>
             
    </div>
    <div className='container' >
        <h3>text summary</h3>
        <p>words {text.split(" ").length} and {text.length}characters </p>
        <p>{0.8 * text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div >
    </>
  )
}
