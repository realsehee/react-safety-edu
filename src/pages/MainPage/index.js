import React, { useEffect, useState } from 'react'
import Banner from "../../components/Banner";
import Nav from "../../components/Nav"
import "../../components/Row";
import requests from "../../api/requests";
import styled from "styled-components";
import "../../components/Row.css";
import MovieModal from '../../components/MovieModal';
import "./MainPage.css";
import cancer from "../../public/cancer.png";
import heart from "../../public/heart.png";
import lung from "../../public/lung.png"
import safety_logo1 from "../../public/safety_logo1.png"
import cancer1 from "../../public/cancer1.png"
import cancer2 from "../../public/cancer2.png"
import cancer3 from "../../public/cancer3.png"
import cancer4 from "../../public/cancer4.png"
import heart1 from "../../public/heart1.png"
import heart2 from "../../public/heart2.png"
import heart3 from "../../public/heart3.png"
import heart4 from "../../public/heart4.png"
import lung1 from "../../public/lung1.png"
import lung2 from "../../public/lung2.png"
import lung3 from "../../public/lung3.png"
import lung4 from "../../public/lung4.png"
export default function MainPage(title,id) {
  const [video, setVideo] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [videoSelected, setvideoSelected] = useState({});

  // useEffect(()=>{
  //   fetchVideoData();
  // },[]);
  const handleClick = (video) =>{
    setModalOpen(true);
    setvideoSelected(video);
    modalOpen && <MovieModal {...videoSelected} setModalOpen={setModalOpen}/>
  };
  const handleClick1 = (video) =>{
    setModalOpen(true);
    setvideoSelected(video);
    
  };
  return (
    <div>
      <Nav/>
      <Banner />
        <Container>
          <HomeContainer>
          <Title>암</Title>
          <Thumb
            title='암 전조 증상'
            alt="안전교육"
            src={cancer1}
            className="row__poster"
            onClick={()=>handleClick(video)}
          />
          {modalOpen && <MovieModal {...videoSelected} setModalOpen={setModalOpen}/>}
          <Thumb
            title='암 전조 증상'
            alt="안전교육"
            src={cancer2}
            className="row__poster"
            onClick={()=>handleClick1(video)}
          />
          <Thumb
            title='암 전조 증상'
            alt="안전교육"
            src={cancer3}
            className="row__poster"
            onClick={()=>window.location.reload()}
          />
          <Thumb
            title='암 전조 증상'
            alt="안전교육"
            src={cancer4}
            className="row__poster"
            onClick={()=>window.location.reload()}
          />
          
      <Title>심장</Title>
      <Thumb
        title='암에 대해 알아봅시다.'
        alt="안전교육"
        src={heart1}
        className="row__poster"
        onClick={()=>handleClick(video)}
      />
      <Thumb
        alt="안전교육"
        src={heart2}
        className="row__poster"
        onClick={()=>window.location.reload()}
      />
      <Thumb
        alt="안전교육"
        src={heart3}
        className="row__poster"
        onClick={()=>window.location.reload()}
      />
      <Thumb
        alt="안전교육"
        src={heart4}
        className="row__poster"
        onClick={()=>window.location.reload()}
      />
      <Title>폐렴</Title>
      <Thumb
        alt="안전교육"
        src={lung1}
        className="row__poster"
        onClick={()=>window.location.reload()}
      />
      <Thumb
        alt="안전교육"
        src={lung2}
        className="row__poster"
        onClick={()=>window.location.reload()}
      />
      <Thumb
        alt="안전교육"
        src={lung3}
        className="row__poster"
        onClick={()=>window.location.reload()}
      />
      <Thumb
        alt="안전교육"
        src={lung4}
        className="row__poster"
        onClick={()=>window.location.reload()}
      />
      <Title>실습 & 퀴즈</Title>
      <Logo>
        <Button>
          <Img
            title='심장교육'
            alt="안전교육"
            src={safety_logo1}
            className="row__poster"
            onClick={()=>window.location.reload()}
          />
        </Button>
        <Button>
          <Img
            alt="안전교육"
            src={cancer}
            className="row__poster"
            onClick={()=>window.location.reload()}
          />
          </Button>
          <Button>
          <Img
              alt="안전교육"
              src={heart}
              className="row__poster"
              onClick={()=>window.location.reload()}
          />
          </Button>
          <Button>
          <Img
              alt="안전교육"
              src={lung}
              className="row__poster"
              onClick={()=>window.location.reload()}
          />
          </Button>
      </Logo>
      
        {/* <Iframe 
        src="https://www.youtube.com/embed/85OxiZscPWg" 
        title="YouTube video player" 
        frameborder="0" 
        allow="autoplay;" allowfullscreen>

        </Iframe> */}
        {/* <Row title="폐렴" id="TR" fetchUrl={requests.fetchTopRated} />
        <Row
          title="심장"
          id="AM"
          fetchUrl={requests.fetchActionMovies}
        />
        <Row
          title="실습"
          id="Cm"
          fetchUrl={requests.fetchComedyMovies}
        /> */}
        
        </HomeContainer>
      </Container>
      
    </div>
  );
}
const Iframe = styled.iframe`
    width : 20%;
    height: 20%;
    z-index: -1;
    opacity: 0.65;
    border: none;

    &::after{
        MovieModal
        content:"";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;
    flex-direction: column;
    width: 100;
    height: 100vh;
    padding-left: 200px;
`   
const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
`
const Title = styled.h1`
  color: white;
`
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  width: 1200px;
  height: 200px;
  background-color : #111;

`
const Button = styled.button`
  display : flex;
  justify-content: center;
  align-item: center;
  width:80%;
  height:100%;
  background-size: cover;
  background-color : #111;
  border : none;
`
const Img = styled.img`
  display: flex;
  justify-content: center;
  align-item: center;
  width: 100%;
  height: 100%;
  background-size: cover;
  border-radius: 50px;
  background-color : #111;
`
const Thumb = styled.img`
  width : 20%;
  height: 20%;
  z-index: -1;
  opacity: 0.65;
  border: none;
  border-radius : 20px;

  &::after{
      MovieModal
      content:"";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
  }
`