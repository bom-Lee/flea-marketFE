import styled from 'styled-components';

import { Button } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';
import { useResolvedPath } from 'react-router-dom';

// props : item.item => map으로 item.comment

const Item = () => {
    const dispatch = useDispatch();

    const item = useSelector((state) => state.item.items);
    console.log(item[0]);

    // const navigate = useNavigate()
    // const params = useParams();
    // console.log(params.nickname)

    // const item_detail = useSelector((state) => state.item.item)
    // console.log(item_detail)

    // const include = item_detail.find((item) => {
    //     if(item.nickname === params.nickname) return item
    // })
    // console.log(include);


    // const [selected, setSelected] = React.useState("");
    // const handleSelect = (e) => {
    //   setSelected(e.target.value);
    // };
    // // console.log(selected);



    // const itemName_ref = React.useRef(null);
    // const image_ref = React.useRef(null);
    // const itemPrice_ref = React.useRef(null);
    // const itemDetail_ref = React.useRef(null);


    return (
        <ContainerBox>
        <Container>

        <ItemName>{item[0].itemName}</ItemName>
        
        <Image src={item[0].images} style={{"backgroundColor": "#efefef", width: "95%", height: "350px"}}/>
            <Userinfo>
                <UserNickName>{item[0].nickname}</UserNickName><Address>{item.city}</Address>
            </Userinfo>
        <Subject>
            <ItemPrice>{item[0].itemPrice}</ItemPrice>

            <p>{item[0].itemDetail}</p>
        </Subject>

        {/* <Button type="submit" onClick={() => {
            window.alert("작성완료!")
            navigate("/")
             }} style={{color: 'black', margin: "0px 8px 0px 0px"}} variant="outlined" color="inherit">
                작성하기</Button> */}

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

const ItemName = styled.div`
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    margin: 10px auto;
    margin-left: 20px;
`;

const Image = styled.div`
    margin: 0 auto;
`;

const Container = styled.div`
    width: 600px;
    height: 75%;
    border: solid 1px #dadada;
    border-radius: 8px;

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
    margin-top: 10px;
    padding: 10px 10px 5px 10px;
`;

const UserNickName = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-right: 10px;
    float:left;
`;

const Address = styled.div`
    font-size: 14px;
    color: rgb(136, 136, 136);
`;


const Subject = styled.div`
    text-align: left;
    padding: 20px;
    font-size: 14px;
    // margin-left: 16px;
`;

const ItemPrice = styled.div`
    font-size: 20px;
    font-weight: bold;
    &::after{
        content: "원";
        font-size: 13px;
        margin-left: 3px;
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

export default Item;