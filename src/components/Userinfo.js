import React from "react";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";

const UserInfo = () => {
  const navigate = useNavigate();

  
  return (<>
    <Container>
      <H3>회원정보</H3>
      <div label="이메일" placeholder="이메일">
        이메일
      </div>
      <div label="닉네임" placeholder="닉네임">
        닉네임
      </div>
      <div label="비밀번호" type="password" placeholder="비밀번호">
        비밀번호
      </div>
      <div label="주소" placeholder="__시">
        대구시
      </div>
      <br></br></Container>
      <Container2>
      <H3>작성 게시글 목록</H3>
      <PostList>
        <Post />
        <p>상품명</p>
      </PostList>
    </Container2></>
  );
};

const Container = styled.div`
  width: 400px;
  height: 150px;
  border: solid 1px #dadada;
  display: inline-block;
  margin-top: 100px;
  padding: 30px;
`;

const Container2 = styled.div`
  width: 400px;
  height: 400px;
  border: solid 1px #dadada;
  float: left;
  margin-top: 100px;
  padding: 30px;
`;

const H3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const PostList = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
`;

const Post = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 180px;
  height: 210px;
  left: 544px;
  top: 488px;
  background: #e0e2e6;
  border-radius: 8px;
`;

export default UserInfo;
