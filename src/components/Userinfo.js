import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const UserInfo = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.users);
  console.log(user[1]);
  return (
  
      <>
        <Userinfo>
          <H3>{user[1].nickname}님 정보</H3>
          <I label="이메일" placeholder="이메일">
            이메일 <P>{user[1].username}</P>
          </I>
          <I label="닉네임" placeholder="닉네임">
            닉네임 <P>{user[1].nickname}</P>
          </I>
          <I label="주소" placeholder="__시">
            주소 <P>{user[1].city}</P>
          </I>
        </Userinfo>
        
        <H3>작성 게시글 목록</H3>
        
          <p>상품명</p>
      
      </>

  );
};

// const Box = styled.div`
//   display: flex;
//   flex-direction: column-reverse;
// `;

const Userinfo = styled.div`
  width: 400px;
  height: 150px;
  position: absolute;
  left: 50%;
  border: solid 1px #dadada;
  transform: translateX(-50%);
  margin-top: 100px;
  padding: 50px;
`;

const H3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const I = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: left;
  margin-top: 10px;
  font-weight: 400;
  color: gray;
`;

const P = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-left: 10px;
  color: black;
`;

// const PostList = styled.div`
//   display: flex;
//   justify-content: center;
//   left: 50%;
//   border: solid 1px #dadada;
//   transform: translateX(-50%);
// `;

// const Post = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: left;
//   width: 180px;
//   height: 210px;
//   left: 544px;
//   top: 488px;
//   background: #e0e2e6;
//   border-radius: 8px;
// `;

export default UserInfo;
