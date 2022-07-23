import React from 'react';
import './App.css';
// import { useDispatch, useSelector } from 'react-redux';

import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Main from "./components/Main";

import { Routes, Route } from "react-router-dom";

function App() {
    
  return (
    <div className="App">
      <Header />

      <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;