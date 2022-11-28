import { useState } from 'react';
import Score from './SwipeItem';
import Quiz from './Quiz';
import styled from 'styled-components';

import '../../App.css';

const QuizPage = () => {

  const [states, setStates] = useState({
    mode: 'main',
    name: '윤혁',
    score: '44',
    quizList: [
      { question: "조기 위암은 특별한 증상이 없다.", answer: "O" },
      { question: "위 내시경은 3~4년에 한 번씩 하는 것이 좋다.", answer: "X" },
      { question: "위암은 가족력과 관계가 없다.", answer: "X" },
      { question: "장상피화생이 결과가 나오면 위암에 안심해도 괜찮다.", answer: "X" },
      { question: "갑상선 암은 초기에 특별한 증상이 없다.", answer: "O" },
      { question: "갑상선 암은 초기증상으로 성대마비와 음식물 삼키기 어려운 증상이 있다.", answer: "O" },
      { question: "갑상선 암이 발생시 황달이 발생한다.", answer: "X" },
      { question: "대장암은 평소 식생활과 관련이 없다.", answer: "X" },
      { question: "50세 이상이거나 육류를 즐겨할 경우 5년에 1번씩 대장 내시경을 받아야한다.", answer: "O" },
      { question: "배변 습관의 변화도 유력한 대장암 의심 증상이다 ", answer: "O" },
      { question: "복통, 식욕부진, 소화 불량 증세는 대장암의 의심 증상이다", answer: "O" },
      { question: "유방암의 증상으로 피부에 작은 구멍이 생길 수 있다", answer: "O" },
      { question: "유방암은 초기증상이 없다.", answer: "O" },
      { question: "간암의 초기증상으로 성대마비 증세가 있다.", answer: "X" },
      { question: "전립선 암과 비대는 구분하기가 쉽다.", answer: "X" },
      { question: "전립선 암은 잔뇨 증상이 있다.", answer: "O" },
      { question: "폐암은 초기 증상은 기침과 목쉰 소리, 식욕부진이다.", answer: "X" },
      { question: "폐암은 초기 증상은 어깨나 팔에 통증이 나타날 수 있다", answer: "O" },
      { question: "자궁 경부암은 초기 증상으로 다리 부기가 있다.", answer: "O" },
      { question: "자궁 경부암 발생 시 소변을 볼 때 통증이 있다.", answer: "X" },
    ]
  });

  function changeMode(mode) {
    setStates({ ...states, ['mode']: mode })
  }

  return (
    <div>
      {states.mode === 'main' ?
        <div style={{textAlign:'center'}}>
          <StartButton style={{ margin: '30px', border: '0', borderRadius: '15px', fontSize: '30px' }} onClick={()=>{changeMode('quiz')}}>퀴즈 시작하기</StartButton>
        </div> : null}
      {states.mode === 'score' ? <Score name={states.name} score={states.score} /> : null}
      {states.mode === 'quiz' ? <Quiz mode={()=>{changeMode('score')}} quizList={states.quizList} /> : null}
    </div>
  );
}


const StartButton = styled.button`
  text-align: center;
  border: 0;
  border-radius: 30px;
  width: 30vw;
  background: skyblue;
  color: #fff;
  font-size: 50px;
`;

export default QuizPage;