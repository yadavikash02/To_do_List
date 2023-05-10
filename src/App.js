import './App.css';
import Header from "./MyComponents/Header";
// import { Footer } from "./MyComponents/Footer";
import  AddTodo  from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter , Routes,
  Route
} from "react-router-dom";

function App() {

  return ( 
    <BrowserRouter>
      <Header title="My Todos List"  /> 
      <Routes>
          <Route path="/" element={<AddTodo></AddTodo>}/>
          <Route path="/about" element={<About />}/>
        </Routes> 
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
