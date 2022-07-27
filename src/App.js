
import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Main from "./components/Main";
import ItemUp from "./components/ItemUp";
import UserInfo from "./components/Userinfo";
<<<<<<< HEAD
=======
import Item from "./components/Item";
>>>>>>> faedde405d57bcc624b93539478bcff475315adc

function App() {
  
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="/itemup" element={<ItemUp />} />
<<<<<<< HEAD
          <Route path="/userinfo" element={<UserInfo/>}/>
=======
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/Item" element={<Item />} />
>>>>>>> faedde405d57bcc624b93539478bcff475315adc
        </Routes>
    </>
  );
}

export default App;

const MainBox = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
