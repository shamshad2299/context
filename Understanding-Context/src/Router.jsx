// import React, { useState } from 'react';
// import { createBrowserRouter } from 'react-router-dom';
// import Home from './component/Home';
// import About from './component/About';
// import App from './App';
// import { RouterProvider } from 'react-router-dom';

// function RouterWrapper() {
//   const [mode, setMode] = useState("light");
//   const [enable , disable] = useState("enable dark mode");
//   const handleOnClick =()=>{
//     if(mode === "light"){
//       setMode("dark");
//       disable("enable light mode");
//      // document.getElementById("text").style.backgroundColor= "blue";
//     //  setTimeout(()=>{
//     //     document.title = "textUtils Contain Virus"
//     //  },2000)
//     //  setTimeout(()=>{
//     //   document.title = "install textUtils now"
//     //  },1500)
//      document.title = "textUtils - dark Mode"
//     }
//     else{
//       setMode("light");
//     //  document.getElementById("text").style.backgroundColor= "white";
//     document.title = "textUtils - light Mode"
//     disable("enable dark mode");
//     }
//   }

//   const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <App />,
//       children: [
//         {
//           path: '/home',
//           element: <Home state={mode} enable = {enable} handleOnClick = {handleOnClick} disable ={disable}/>,
//         },
//         {
//           path: '/about',
//           element: <About />,
//         },
//       ],
//     },
//   ]);

//   return <RouterProvider router={router} />;
// }

// export default RouterWrapper;


