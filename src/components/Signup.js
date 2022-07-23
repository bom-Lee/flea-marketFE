import React, { useRef } from 'react';
import styled from 'styled-components';

import { auth, db } from "../shared/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

import { useNavigate, Link } from "react-router-dom"

const Signup = () => {
  const id_ref = useRef(null);
  const name_ref = useRef(null);
  const pw_ref = useRef(null);

  const navigate = useNavigate();

  const signupFB = async () => {

      const user = await createUserWithEmailAndPassword(
        auth,
        id_ref.current.value,
        // name_ref.current.value,
        pw_ref.current.value
        );
        console.log(user);
  
        const user_doc = await addDoc(collection(db, "users"), {
          user_id: id_ref.current.value,
          name : name_ref.current.value,
          // pw : pw_ref.current.value,
        });
  
        console.log(user_doc.id);

        navigate("/")
    };
  
  return (
    <Container>
      <Input ref={id_ref} placeholder="이메일을 입력해주세요" required />
      <Input ref={name_ref} placeholder="이름을 입력해주세요" />
      <Input ref={pw_ref} type="password" placeholder="비밀번호를 입력해주세요" />
      <Input ref={pw_ref} type="password" placeholder="비밀번호를 확인해주세요" />
      <Button onClick={signupFB}>Signup</Button>
        <p>
          회원이신가요? <Link to="/login">로그인</Link>
        </p>
    </Container>
  )
}

const Container = styled.div`
  width: 400px;
  height: 250px;
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
  color: slateblue;
  border: none;
  border-radius: 8px;
  background-color: black;
`;

export default Signup;
