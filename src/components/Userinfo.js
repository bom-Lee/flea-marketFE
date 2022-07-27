import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const UserInfo = () => {
  const navigate = useNavigate();
  //유저 정보
  const user = useSelector((state) => state.user.users);
  //
  const item = useSelector((state) => state.item.items);
  //
  console.log(user[1]);
  //아이템


  const dispatch = useDispatch();

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
        <I label="주소" placeholder="주소">
          주소 <P>{user[1].city}</P>
        </I>
      </Userinfo>
      <ItemInfos>
        <H3>오늘의 상품 추천</H3>
        <ItemContainer>
          {item.map((item, idx) => (
            <Cards item={item} key={idx} />
          ))}
        </ItemContainer>
      </ItemInfos>
    </>
  );
};

// const Box = styled.div`
//   display: flex;
//   flex-direction: column-reverse;

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

const ItemInfos = styled.div`
  position: relative;
  left: 26%;
  margin-top: 100px;
`;
const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
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

export default UserInfo;
