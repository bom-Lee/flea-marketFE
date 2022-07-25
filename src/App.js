import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Signup from "./components/Signup";
import Header from "./components/Header";
import Main from "./components/Main";
import Login from "./components/Login";
import UserInfo from "./components/Userinfo";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainBox>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="userinfo" element={<UserInfo/>}/>
        </Routes>
      </MainBox>
    </BrowserRouter>
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
