import React, { useState } from 'react'


export default function About(props) {
  const [myStyle, setStyle] = useState({
    color : "black",
      backgroundColor : "white"  
  } );
  const [btnText , setBtnText] =useState("Enable Dark mode")
  

  const handleOnClick =()=>{
    if(myStyle.color === "black" && myStyle.backgroundColor === "white"){
      let newStyle ={
        color : "white",
        backgroundColor : "black"
      } 
      setStyle(newStyle);
      setBtnText("Enable Light Mode");
      document.title = "textUtils - dark Mode"
    }
    if(myStyle.color === "white" && myStyle.backgroundColor === "black"){
      let newStyle = {
        color : "black",
          backgroundColor : "white"  
      }
      setStyle(newStyle);
      setBtnText("Enable Dark Mode");
      document.title = "textUtils - light Mode"
    }
  
    
  }
  return (
<>
<label className=' m2 p2 flex item-align justify' htmlFor="checkbox"><strong>{btnText} :</strong>
<input
onClick={handleOnClick}
 className='p2 m1 width1' type="checkbox" />

</label>
    <div className='about flex m1 p1 item-align justify radius' style={myStyle}>
 <div>
 <h1 className='text-align' > <strong>About our Page :</strong> </h1>

   <div style={myStyle} className='h'>
   <select className='width text-align  radius' name="india" id="india" style={myStyle}>
     <option  value="India">This is an App which is used to convert the given words into UpperCase from lowercase</option>
     </select>
     <select className='width text-align radius' name="india" id="india" style={myStyle}>
     <option  value="India">This is an App which is used to convert the given words into UpperCase from lowercase</option>
     </select>
     <select className='width  text-align radius' name="india" id="india" style={myStyle}>
     <option  value="India">This is an App which is used to convert the given words into UpperCase from lowercase</option>
     </select>
     <select className='width text-align radius' name="india" id="india" style={myStyle}>
     <option  value="India">This is an App which is used to convert the given words into UpperCase from lowercase</option>
     </select>
   </div>
  
 </div>
    </div>
    <button
    onClick={handleOnClick}
     className='p2 radius border flex justify item-align' style={myStyle}>{btnText}</button>
</>
  )
}
