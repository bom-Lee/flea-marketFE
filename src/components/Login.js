import React from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

// import { Link } from "react-router-dom"

const Login = () => {
  
  const navigate = useNavigate();

  // const [id, onChangeId, setId] = useInput("");
  // const [pwd, onChangePwd, setPwd] = useInput("");

  // const onReset = useCallback(() => {
  //   setId("");
  //   setPwd("");
  // }, [setId, setPwd]);

  // const onLogin = () => {
  //   if (!id || !pwd) {
  //     alert("모든 값을 정확하게 입력해주세요");
  //     return;
  //   }

  //   alert("로그인");
  //   onReset();
  // };

  return (
    <>
      <Container>
        <H2>로그인</H2>
            <Input
              id="user_id"
              // value={id}
              // onChange={onChangeId}
              label="이메일"
              placeholder="이메일을 입력해주세요"
              required
            />
            <Input
              type="password"
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요"
              id="user_pwd"
              // value={pwd}
              // onChange={onChangePwd}
              required
            />
        <Button onClick={() => navigate("/")}>로그인</Button>
        <P>
          회원이 아니신가요? <Link to="/signup">회원가입</Link>
        </P>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 400px;
  height: 220px;
  border: solid 1px #dadada;
  display: inline-block;
  margin-top: 100px;
  padding: 20px;
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
  margin-top: 40px;
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

export default Login;
