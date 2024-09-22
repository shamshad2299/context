import React, { useState } from 'react'
import Alert from './Alert';

export default function Home({state,enable,handleOnClick,disable}) {
  const [text , setText] = useState("ShamShad Ahamad");
  
  const [alert,setAlert] = useState('');
  const showAlert= (message,type)=>{
setAlert({ 
    msg : message,
   type : type,
  })
 setTimeout(() =>{
  setAlert(" ");
 },1500)
}
  const handleClicked1 =()=>{
   let newText = text.toUpperCase();
   setText(newText);
   showAlert("converted into UpperCase !!","success");
  }
  const handleClicked2 =()=>{
    let newText = text.toLowerCase();
    setText(newText);
    showAlert("converted into LowerCase !!","warning");
  }

  const handleCopy =()=>{
    //console.log("i am Coppied !!");
    const text = document.getElementById("element");
    text.select();
     navigator.clipboard.writeText(text.value);
     showAlert("text is coppied !!","primary");
  }

  const removeExtraSpaces =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    showAlert("extraSpaces are removed !!","warning");
  }

  // const handleOnClose = ()=>{
  //   dismiss(null);

  // }

   const handleClearText =()=>{
     let newText = " ";
     setText(newText);
     showAlert("texts are Clear!!","warning");
  }
  return (
   <>
   <Alert alert={alert}></Alert>
   {/* <div className="alert m1 p1 radius"><span>{alert}</span>
   <span
   onClick={handleOnClose}
   className='dismiss m3'>x</span></div> */}
  <label className=' m2 p2 flex item-align justify' htmlFor="checkbox"><strong>{enable} :</strong>
<input
 onClick={handleOnClick}
 className='p2 m1 width1' type="checkbox" />
 </label>
    <div className={`m1 p1 flex item-align justify ${state} radius`}>
      
      <div className="contain">
      <textarea
      onChange={(event)=>setText(event.target.value)}
       className='text border radius' style ={{backgroundColor: state === "light"? " white" : "grey",color : state ==="light" ? "black" : "white"}} name="element" value={text} id="element" placeholder='Enter something here...'></textarea>
 
 <div className={`m1 p1 flex ${state}`}>
   <button
   onClick={handleClicked1}
   className={`m1 p1 color radius hover ${state} border font`}>UpperCase</button>
   <button
   onClick={handleClicked2}
   className={`m1 p1 color radius hover ${state} border font`}>LowerCase</button>
    <button
   onClick={handleCopy}
   className={`m1 p1 color radius hover ${state} border font`}>Copy Texts</button>
      <button
   onClick={removeExtraSpaces}
   className={`m1 p1 color radius hover ${state} border font`}>Remove Extra Spaces</button>
        <button
   onClick={handleClearText}
   className={`m1 p1 color radius hover ${state} border font`}>Clear Text</button> 
 </div>
 <div className="word-count">
   <h2><strong>Words Counter</strong> : </h2>
   <p> <strong>total alphabets</strong> : {text.length} </p>
   <p> <strong>total words</strong> : {text.split(" ").length} </p>
   <p><strong>Time Taken to read : 0.008 *{text.split(" ").length} : min</strong></p>
   <h1>Prview : </h1>
   <p>{text}</p>
 </div>
      </div>
    
     </div>
   </>
  )
}
