
import React from 'react';
import './App.css';
import axios from "axios";

import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Main from "./components/Main";
import ItemUp from "./components/ItemUp";
import UserInfo from "./components/Userinfo";
import Item from "./components/Item";

function App() {
  
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="/itemup" element={<ItemUp />} />
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/Item" element={<Item />} />
        </Routes>
    </>
  );
}

export default App;