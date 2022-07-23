import React, { useRef } from 'react';
import styled from 'styled-components';

import { useNavigate, Link } from "react-router-dom"

const Signup = (() => {
        const id_ref = useRef(null);
        const name_ref = useRef(null);
        const pw_ref = useRef(null);
        const city_ref = useRef(null);
      
        const navigate = useNavigate();

    return (
      <>
        <Container>
        <h2>회원가입</h2>
          <Input ref={id_ref} placeholder="이메일" required />
          {/* <button>중복확인</button> */}
          <Input ref={name_ref} placeholder="닉네임" />
          {/* <button>중복확인</button> */}
          <Input ref={pw_ref} type="password" placeholder="비밀번호" />
          <Input ref={pw_ref} type="password" placeholder="비밀번호 재입력" />
          <Input ref={city_ref} type="password" placeholder="주소 (시 까지만 입력)" />
          <Button onClick={"/"}>Signup</Button>
            <p>
              회원이신가요? <Link to="/login">로그인</Link>
            </p>
        </Container>
        </>
      )
  }
);

const Container = styled.div`
  width: 400px;
  height: 440px;
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

export default Signup;