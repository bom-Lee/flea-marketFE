import React from "react";
import styled from "styled-components";

// import { history } from '../redux/configStore'

import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Cards = () => {
  const navigate = useNavigate()

  const item = useSelector((state) => state.item.items)
    console.log(item)


// const Cards = (props) => {
//   const navigate = useNavigate()
//   const { nickname, images, title, price, city } = props.data;

  return (
    <>
    {/* <Item onClick={() => {
      navigate('/boards/' + data.nickname + '/items')
    }}></Item> */}
    
          <Card>
                <CardInner>
                {/* onClick={()=>navigate.push(`/item/${idx}`)} */}
                    <CardHead>
                    <img src={item[0].images} alt="" />
                    <Sth />
                    </CardHead>
                    <CardContents>
                    <ItemName>{item[0].itemName}</ItemName>
                    <ItemContentBottom>
                        <Price>{item[0].itemPrice}</Price>
                        <City>{item[0].city}</City>
                        {/* <Time>2시간 전</Time> */}
                    </ItemContentBottom>
                    </CardContents>
                </CardInner>
          </Card>
          </>
    );
};

// const Item = styled.div`
//   width: 100%;
//   height: 200px;
//   background-color: #C7FCEC;
//   border-radius: 20px;
//   border: 4px solid #1ABC9C;
//   box-sizing: border-box;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transition: 0.7s;
//   cursor: pointer;
//   margin: 30px auto;
//   &:hover {
//     box-shadow: 0 0 14px #0C7586;
//     transform: scale(1.05);
//   }
//   &:hover h2 {
//     font-size: 25px;
//   }
//   @media (max-width: 768px) {
//     &:hover h2 {
//       font-size: 17px;
//     }
//   }
// `

const Card = styled.div`
  width: 196px;
  // margin-bottom: 10px;
  // background-color: blue;
  padding : 0px 20px 0px 20px;
  
  &:nth-child(5n) {
    margin-right: 0;
  }
`;

const CardInner = styled.a`
  border: 1px solid rgb(238, 238, 238);
  background: rgb(255, 255, 255);
  display: block;
`;

const CardHead = styled.div`
  position: relative;
  width: 100%;
  height: 194px;
  img {
    vertical-align: bottom;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
`;

const Sth = styled.div``;
const CardContents = styled.div`
  padding: 15px 10px;
  height: 50px;
`;
const ItemName = styled.div`
  position: relative;
  font-size: 14px;
  padding-bottom: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const ItemContentBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &::after{
    content: "원";
    font-size: 13px;
    margin-left: 3px;
  }
`;

const City = styled.div`
  font-size: 12px;
  color: rgb(136, 136, 136);
`;

const Time = styled.div`
  font-size: 12px;
  color: rgb(136, 136, 136);
`;



export default Cards;