import React from 'react';
import styled from 'styled-components';

import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const ItemUp = () => {
    // const item_name_ref = React.useRef(null);
    // const image_ref = React.useRef(null);
    // const item_price_ref = React.useRef(null);
    // const item_detail_ref = React.useRef(null);


    const navigate = useNavigate();
    // // const dispatch = useDispatch();
    // // const is_login = useSelector(state => state.user.is_login);

    const goToHome=()=>{
        navigate('/');
        }


    // useEffect(()=>{
    //     if(!is_login){
    //         return history.replace("/login");
    //     }
    // },[])



    return (
        <>
        <h2>상품등록</h2>

        <Container>
            <Userinfo>
                <span>닉네임</span>
                <span>주소</span>
            </Userinfo>

            <div>
                <div>
                상품명
                <input type='text' placeholder="상품 제목을 입력해주세요." />
                </div>
                <br />

                <span>사진</span>
                <input type="file" />
                <br />

                <span>가격</span>
                <input type="number" placeholder="숫자만 입력해주세요" />
                <br />

                <div>
                <textarea style={{width: '85%', height: '300px'}}
                placeholder="상품 설명을 입력해주세요"
                // value={textValue}
                // onChange={(e) => handleSetValue(e)}
                ></textarea>
            
                </div>
            </div>
        </Container>
        <Button onClick={goToHome} style={{color: 'black', margin: "0px 8px 0px 0px"}} variant="outlined" color="inherit">
                작성하기</Button>
        </>
    )
}

const Container = styled.div`
    width: 500px;
    height: 600px;
    border: solid 1px #dadada;
    display: inline-block;
    margin-top: 100px;
    padding: 20px 20px 20px 20px;
    margin: 10px 10px 10px 10px;
    text-align: center;
`;

const Userinfo = styled.div`
    text-align: left;
    margin-left: 25px;
    padding: 10px 10px 30px 10px;
`;

const TextArea =styled.div`
    width: 450px;
    height: 300px;
    border: solid 1px #dadada;
    border-radius: 8px;
`;

// const content_txt = styled.div`
//     width: 90%;
//     resize: none;
//     border: none;
//     height: 500px;

//     outline : none;
// `;

export default ItemUp;