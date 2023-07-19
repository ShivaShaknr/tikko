import { useState } from "react";

import products from "./DATA/data";
import { Route , Routes , BrowserRouter } from "react-router-dom";
import Card from "./COMPONENT/card";
import "./index.css";
import Sidebar from "./SIDEBAR/sidebar";
import Register from "./REGISTER/Register";
import Recommended from "./RECOMENDED/recomended";
import Products from "./PRODUCT/product";
import Nav from "./NAVBAR/navbar";
import Maincomp from "./MAIN_COMP/Maincomp";
import Login from "./LOGIN/Login";
function App() {
  

  return (
    <>
    <Routes>
      <Route exact path={"/"} element={<Register/>}/>
      <Route exact path={"/main"} element={<Maincomp/>}/>
      <Route exact path={"/login"} element={<Login/>}/>
    </Routes>

      
    </>
  );
}

export default App;

// import { BrowserRouter, Route,  Routes } from 'react-router-dom';
// import './App.css';
// import Nav from './NAVBAR/navbar';
// import Login from './LOGIN/login';
// import Register from './REGISTER/register';
// import Home from './HOME/home';









// function App() {
  

 

//   return (
//     <>
      
//       <BrowserRouter>
//       <Nav/>
//       <Routes>
//          <Route path='/log_sign' element={<Login/>}/>
//          <Route path='/Reg' element={<Register/>}/>
//          <Route path='/home' element={<Home/>}/>
         
        
// </Routes>
      
  
      
      
      
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

