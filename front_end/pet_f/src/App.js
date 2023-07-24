import { useState } from "react";
import data from "./DATA/data";
import products from "./DATA/data";
import { Route , Routes , BrowserRouter } from "react-router-dom";
import Card from "./COMPONENT/card";
import "./index.css";
import {Toaster} from "react-hot-toast";

import Maincomp from "./MAIN_COMP/Maincomp";
import Login from "./LOGIN/Login";
import Register from "./REGISTER/Register";
import Nav from "./NAVBAR/navbar";
import AddToCart from "./ADDTOCART/AddToCart";
function App() {
  
  

  return (
    <>
    <Nav/>
    <Routes>
      <Route exact path={"/"} element={<Register/>}/>
      <Route exact path={"/main"} element={<Maincomp/>}/>
      <Route exact path={"/login"} element={<Login/>}/>
      <Route exact path={"/register"} element={<Register/>}/>
      <Route exact path={"/AddToCart"} element={<AddToCart/>}/>
    </Routes>
    <Toaster/>

      
    </>
  );
}

export default App

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

