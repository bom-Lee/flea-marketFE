import React from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <H2>회원정보</H2>
      <Input label="이메일" placeholder="이메일" />
      <Input label="닉네임" placeholder="닉네임" />
      <Input label="주소" placeholder="__시" />
      <Input label="비밀번호" type="password" placeholder="비밀번호" />
      <Input label="비밀번호 확인" type="password" placeholder="비밀번호 확인" />
      <Button onClick={() => navigate("/")}>가입하기</Button>
      <P>
        회원이신가요?<Link to="/login">로그인</Link>
      </P>
    </Container>
  );
};

const Container = styled.div`
  width: 400px;
  height: 350px;
  border: solid 1px #dadada;
  display: inline-block;
  margin-top: 100px;
  padding: 30px;
`;

const H2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const P = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 15px;
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
  color: slateblue;
  border: none;
  border-radius: 8px;
  background-color: black;
`;

export default Signup;
