import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Cards from "./Cards";

const UserInfo = () => {
  const dispatch = useDispatch();
  //유저 정보
  const user = useSelector((state) => state.user.users);
  console.log(user[1]);
  //아이템

  const item = useSelector((state) => state.item)
  console.log(item)

  return (
    <>
      <Userinfo>
        <H3>{user[1].nickname}님 정보</H3>
        <I label="이메일" placeholder="이메일">
          이메일 <P>{user[1].username}</P>
        </I>
        <I label="닉네임" placeholder="닉네임">
          닉네임<P>{user[1].nickname}</P>
        </I>
        <I label="주소" placeholder="__시">
          주소 <P>{user[1].city}</P>
        </I>
      </Userinfo>

      <ItemList>
        <Section>
          <H3>작성 게시글 목록</H3>
          
            {/* {item.map((item, idx) => <Cards item = {item} key={idx} />)} */}
        </Section>
      </ItemList>
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
  position: relative;
  left: 50%;
  border: solid 1px #dadada;
  border-radius: 2em;
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
  font-size: 17px;
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

const Card = styled.div`
  width: 196px;
  // margin-bottom: 10px;
  // background-color: blue;
  padding: 0px 20px 0px 20px;

  &:nth-child(5n) {
    margin-right: 0;
  }
`;

const CardInner = styled.a`
  border: 1px solid rgb(238, 238, 238);
  background: rgb(255, 255, 255);
  display: block;
`;

const ItemList = styled.div`
  width: 55%;
  left: 25%;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // background-color: orange;
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Section = styled.section`
  min-width: 512px;
  margin: 0px auto;
  padding: 3.5rem 0px 1.5rem;
  // background-color: pink;
  display: inline-block;
`;

const ItemInfos = styled.div`
  position: relative;
  overflow: hidden;
`;
const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default UserInfo;