
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './component/Header'
 import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from './component/Alert';
import { useState } from 'react';
import Home from './component/Home';
function App() {   const [mode, setMode] = useState("light");
 const [enable , disable] = useState("enable dark mode");
 const handleOnClick =()=>{
   if(mode === "light"){
     setMode("dark");
     disable("enable light mode");
   //document.getElementById("text").style.backgroundColor= "blue";
    // setTimeout(()=>{
    //    document.title = "textUtils Contain Virus"
    // },2000)
    // setTimeout(()=>{
    //  document.title = "install textUtils now"
    // },1500)
    document.title = "textUtils - dark Mode"
   }
   else{
     setMode("light");
   //  document.getElementById("text").style.backgroundColor= "white";
   document.title = "textUtils - light Mode"
   disable("enable dark mode");
   }
 }
  return (
    <>
   
      <Header></Header>
  
      <div className="nav-bar read-the-docs m1 p1 border radius  font">
      <Home state={mode} enable = {enable} handleOnClick = {handleOnClick} disable ={disable}></Home>
        {/* <Outlet ></Outlet> */}
      
      </div>
    </>
  )
}

export default App;
