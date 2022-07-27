import React from 'react';
import styled from 'styled-components';
// import { Button } from '@material-ui/core';

// import item from './elements/item'

import Cards from './Cards';
import { useSelector, useDispatch } from 'react-redux';


const Main = () => {
    const dispatch = useDispatch()

    const user = useSelector((state) => state.user)
    console.log(user)

    const item = useSelector((state) => state.item.items)
    console.log(item,"아이템")


    // React.useEffect(() => {
     
    //     //쿠키에 저장된 액세스 토큰이 존재할 때만 서버에 검증 요청
    //    if(getCookie("is_login")){
    //      dispatch(userActions.loginCheckDB());
    //    }
       
    //  }, []);

    return (
        <>
        <MainBanner>
            <img style={{width: "450px", height: "100%"}} src={"https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-2-91a2286453bdf82dea16a7f0ee4ceb9dd325eae0e5a2a9967ba72c344bf8f2fc.webp"} alt="" />

        </MainBanner>
        {/* <MainBanner style={{"backgroundColor": "#efefef", "width":"100%", "height" : "450px"
    }}/> */}
        <ItemList>
            <Section>
            <H2>오늘의 상품 추천</H2>
            <ItemInfos>
                <ItemContainer>
                    {item.map((item, idx) => <Cards item = {item} key={idx} />)}
                </ItemContainer>
            </ItemInfos>
            </Section>
        </ItemList>
        </>
    )
};

const MainBanner = styled.div`
    & img {
        max-width: 100%;
        max-height: 100%;
    }
`;

const ItemList = styled.div`
    max-width: 100%;
    max-height: 90%;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-basis: 33.3%;
    flex-direction: column;
    // background-color: orange;
`;

const H2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Section = styled.section`
    min-width: 512px;
    margin: 0px auto;
    padding: 3.5rem 0px 1.5rem;
    // background-color: pink;
    display: inline-block;
`

const ItemInfos = styled.div`
    position: relative;
    overflow: hidden;

`
const ItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;


export default Main;