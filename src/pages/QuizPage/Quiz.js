import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import SwipeItem from './SwipeItem';

const Quiz = (props) => {
    const [count, changeCount] = useState(0);

    if (count === props.quizList.length) {
        return (
            <EndMessage>
                <h1>Quiz END</h1>
                <button onClick={props.mode}>점수보러가기</button>
            </EndMessage>

        );
    }

    const onSwipe = (direction) => {
        changeCount(count + 1);
    }

    return (
        <div style={{ padding: '20px' }}>
            {props.quizList.map((l, idx) => {
                if (count === idx) {
                    return (
                        <NumContainer key={idx}>
                            <Num>{count + 1}번 문제</Num>
                            <p>{l.question}</p>
                        </NumContainer>
                    );
                }
                
            })}
            <OXcontainer>
                <OX>O </OX>
                <OX> X</OX>
            </OXcontainer>

            {/*swiper가 문제당 하나씩 생기게 하기 위해 map을 사용해서 문제마다 나오게 함*/}
            {props.quizList.map((l, idx) => {
                if (count === idx) {
                    return (
                        <SwipeItem onSwipe={onSwipe} key={idx} ></SwipeItem>
                    )
                    
                }
                
            })}

        </div>
    );
}

const NumContainer = styled.div`
    font-size: 25px;
    font-weight: bold;
    text-align: center;
`;

const Num = styled.span`
    font-size: 0.8em;
    border-radius: 30px;
    background: #fef5d4;
    color : #111;
    border: 0;
`;

const OXcontainer = styled.div`
    display:flex;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    
`;
const OX = styled.div`
    display: flex;    
    color: skyblue;
    width: 50%;
    align-items:center;
    justify-content: center;
    font-weight: bold;
    font-size: 400px;
`;

const EndMessage = styled.div`
    text-align: center;
    & > h1{
        font-size: 100px;
    }

    & > button{
        border: 0;
        border-radius: 30px;
        width: 70%;
        background: skyblue;
        color: #fff;
        font-size: 50px;
    }
`
export default Quiz;