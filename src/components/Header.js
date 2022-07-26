import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Button } from "@material-ui/core";


// import { Stack } from '@material-ui/core';

function Header(pops) {
  // const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Nav>
        <btn
          onClick={() => navigate("/")}
          style={{ color: "white", fontSize: "24px", cursor: "pointer" }}
        >
          FleaMarket
        </btn>
        <Btngruop>
          <Button
            onClick={() => navigate("/login")}
            style={{ color: "white", margin: "0px 8px 0px 0px" }}
            variant="outlined"
            color="white"
          >
            로그인
          </Button>
          <Button
            onClick={() => navigate("/signup")}
            style={{ color: "white" }}
            variant="outlined"
            color="white"
          >
            회원가입
          </Button>
        </Btngruop>
      </Nav>
    </div>
  );
}

const Nav = styled.div`
  background: black;
  width: 100%;
  display: Flex;
  color: white;
  padding: 20px;
  font-weight: 300;
  font-size: 20px;
  font-weight: bold;
`;

const Btngruop = styled.div`
  display: inline-block;
  position: absolute;
  top: 20px;
  right: 16px;
  width: 180px;
  color: slateblue;
  // background-color: ornge;
`;

export default Header;
