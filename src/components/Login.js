import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom"

const Login = (() => {
        const id_ref = React.useRef(null);
        const pw_ref = React.useRef(null);

    return (
        <>
        <Container>
        <h2>로그인</h2>
          <Input ref={id_ref} placeholder="이메일을 입력해주세요" />
          <Input ref={pw_ref} type="password" placeholder="비밀번호를 입력해주세요" />
          <Button onClick={'/'}>Login</Button>
            <p>
              회원이 아니신가요? <Link to="/signup">회원가입</Link>
            </p>
        </Container>
        </>
      );
}
);

const Container = styled.div`
  width: 400px;
  height: 280px;
  border: solid 1px #dadada;
  display: inline-block;
  margin-top: 100px;
  padding: 20px;
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  border-radius: 8px;
  background: #fff;
  box-sizing: border-box;
`;

const Button = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 100%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: white;
  border: none;
  border-radius: 8px;
  background-color: black;
`;

export default Login;