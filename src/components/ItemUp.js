import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Button } from "@material-ui/core";

import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCookie, setCookie } from "../shared/Cookie";
import { actionCreators } from "../redux/modules/item";
import { actionCreators as imageActions} from "../redux/modules/image";

const ItemUp = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  console.log(params.itemName);

  const item_detail = useSelector((state) => state.item.items);
  console.log(item_detail);

  const include = item_detail.find((item) => {
    if (item.itemName === params.itemName) return item;
  });
  console.log(include);

  const [itemName, setItemName] = React.useState("");
  const [image, setImage] = React.useState("");
  const [itemPrice, setItemPrice] = React.useState("");
  const [itemDetail, setItemDetail] = React.useState("");

  // console.log(selected);

  //   const itemName_ref = React.useRef(null);
  //   const image_ref = React.useRef(null);
  //   const itemPrice_ref = React.useRef(null);
  //   const itemDetail_ref = React.useRef(null);

  const handleInputName = (e) => {
    setItemName(e.target.value);
  };

  const handleInputImg = (e) => {
    setImage(e.target.value);
  };

  const handleInputPrice = (e) => {
    setItemPrice(e.target.value);
  };

  const handleInputDetail = (e) => {
    setItemDetail(e.target.value);
  };
  
  const onClickItemUp = () => {
    let image = image.current.files[0]; //이미지 가져왔으니까 참조를 만들어라 !
        dispatch(imageActions.onClickItemUp(image))


    console.log("여기요",itemName,image,itemPrice,itemDetail)
    if (
      itemName === "" ||
      image === "" ||
      itemPrice === "" ||
      itemDetail === ""
    ) {
      window.alert("내용을 모두 입력해주세요.");
    } else { 
      axios({
        method: "POST",
        url: "http://13.209.167.96/item/update",
        data: {
          "itemName": itemName,
          "image": image,
          "itemPrice": itemPrice,
          "itemDetail": itemDetail,
        }, 
      })
        .then((res) => {
          console.log(res);
          dispatch(
            actionCreators.loadItem({
              itemName: res.data.itemName,
              image: res.data.image,
              itemPrice: res.data.itemPrice,
              itemDetail: res.data.itemDetail,
            })
          );
          const accessToken = res.data.token;
          // 쿠키에 토큰 저장
          setCookie("isLoading", `${accessToken}`);
          getCookie("isLoading");
          console.log(getCookie("isLoading"));
          document.location.href = "/";
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <ContainerBox>
      <H2>상품등록</H2>

      <Container>
        <Subject>
          <span>상품명</span>
          <Input
            type="text"
            rules={[{ required: true, massage: "제목을 입력하세요!" }]}
            placeholder="상품 제목을 입력해주세요"
            onChange={handleInputName}
          />
          <br />

          <span style={{ margin: "10px 10px 10px 0px" }}>사진</span>
          <input
            id="image"
            type="file"
            accept="image/*"
            placeholder="사진을 선택해주세요"
            onChange={handleInputImg}
          />
          <br />

          <span>가격</span>
          <Input
            id="itemPrice"
            style={{ width: "200px" }}
            placeholder="숫자만 입력해주세요"
            onChange={handleInputPrice}
          />
          <br />

          <p>상품소개</p>
          <textarea
            id="itemDetail"
            style={{ width: "450px", height: "300px" }}
            rules={[{ required: true, massage: "내용을 입력하세요!" }]}
            placeholder="상품 설명을 입력해주세요"
            onChange={handleInputDetail}
          />
        </Subject>
        <Button
          type="submit"
          onClick={() => {
            window.alert("작성완료!");
            navigate("/");
            onClickItemUp();
          }}
          style={{ color: "black", margin: "0px 8px 0px 0px" }}
          variant="outlined"
          color="inherit"
        >
          작성하기
        </Button>
      </Container>
    </ContainerBox>
  );
};

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
  transform: translate(-50%, -50%);
  margin-top: 100px;
  padding: 20px 20px 20px 20px;
  margin: 10px 10px 10px 10px;
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

export default ItemUp;
