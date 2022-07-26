import React from 'react';
import styled from 'styled-components';

import { Button } from '@material-ui/core';

import { useParams,useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const ItemUp = () => {
    const params = useParams();
  console.log(params.nickname)

    const item_detail = useSelector((state) => state.item.item)
    console.log(item_detail)

    const include = item_detail.find((item) => {
        if(item.nickname === params.nickname) return item
    })
    console.log(include);

    const navigate = useNavigate()

    // const [selected, setSelected] = React.useState("");
    // const handleSelect = (e) => {
    //   setSelected(e.target.value);
    // };
    // // console.log(selected);

    const title_ref = React.useRef(null);
    const image_ref = React.useRef(null);
    const price_ref = React.useRef(null);
    const detail_ref = React.useRef(null);


    return (
        <ContainerBox>
        <H2>상품등록</H2>

        <Container>
            {/* <Userinfo>
                <UserNickName>닉네임</UserNickName>
                <Address>주소</Address>
            </Userinfo> */}

            <Subject>
                <span>상품명</span>
                <Input ref={title_ref} type='text'
                rules={[{ required: true, massage: '제목을 입력하세요!'}]}
                placeholder="상품 제목을 입력해주세요" />
                <br />

                <span style={{margin: "10px 10px 10px 0px"}}>사진</span>
                <input ref={image_ref} type="file" placeholder="사진을 선택해주세요" />
                <br />
                
                <span>가격</span>
                <Input ref={price_ref} style={{width: "200px"}} placeholder="숫자만 입력해주세요" />
                <br />

                <p>상품소개</p>
                <textarea ref={detail_ref} style={{width: "450px", height: "300px"}}
                rules={[{ required: true, massage: '내용을 입력하세요!'}]}
                placeholder="상품 설명을 입력해주세요" />
            </Subject>
        <Button type="submit" onClick={() => {
            window.alert("작성완료!")
            navigate("/")
             }} style={{color: 'black', margin: "0px 8px 0px 0px"}} variant="outlined" color="inherit">
                작성하기</Button>
        </Container>
        </ContainerBox>
    )
}

const ContainerBox = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

const H2 = styled.h2`
    font-size: 1.5rem;
    margin: 10px;
    // margin-bottom: 25px;
    text-align: center;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 500px;
    height: 650px;
    border: solid 1px #dadada;
    border-radius: 8px;
    // display: inline-block;
    // align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    margin-top: 100px;
    padding: 20px 20px 20px 20px;
    margin: 10px 10px 10px 10px;
    
`;

const Userinfo = styled.div`
    text-align: left;
    margin-left: 16px;
    padding: 10px 10px 5px 10px;
`;

const UserNickName = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const Address = styled.div`
    font-size: 14px;
    color: rgb(136, 136, 136);
`;


const Subject = styled.div`
    text-align: left;
    padding: 20px;
    font-size: 14px;
    color: rgb(136, 136, 136);
    
`;

const Input = styled.input`
    position: relative;
    overflow: hidden;
    width: 85%;
    height: 40px;
    margin: 10px 10px 10px 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 5px 0px 5px 10px;
    border: solid 1px #dadada;
    border-radius: 8px;
    background: #fff;
    box-sizing: border-box;
`;

// const Image = styled.div`

// `;

// const TextArea =styled.div`
//     width: 450px;
//     height: 300px;
//     display: inline-block;

//     // text-align: center;
//     border: solid 1px #dadada;
//     border-radius: 8px;
// `;

// const content_txt = styled.div`
//     width: 90%;
//     resize: none;
//     border: none;
//     height: 500px;

//     outline : none;
// `;

export default ItemUp;