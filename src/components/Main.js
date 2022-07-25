import React from 'react';
import styled from 'styled-components';
// import { Button } from '@material-ui/core';

// import { useDispatch } from 'react-redux';

import Cards from './Cards'

const Main = () => {

    return (
        <>

        <MainBanner style={{"backgroundColor": "#efefef", "width":"100%", "height" : "450px"
    }}/>

        <ItemList>
            <Section>
            <H2>오늘의 상품 추천</H2>
            <ItemInfos>
                <ItemContainer>
                    {/* {products.map((info, idx) =><Cards data = {info} key={idx} />)} */}
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
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
    display: flex;
    flex-direction: column;
    // background-color: orange;
`;

const H2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 25px;
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