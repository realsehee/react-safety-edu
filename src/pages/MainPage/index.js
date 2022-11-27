import React, { useEffect, useState } from 'react'
import Banner from "../../components/Banner";
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
export default function MainPage() {
  return (
    <div>
      <Banner />
        <Container>
          <HomeContainer>
          <Title>암</Title>
          <Iframe
            src="https://www.youtube.com/embed/n2WkSIXHyK0" 
            title="YouTube video player"
            frameborder="0" 
            allow=" autoplay; fullscreen" allowfullscreen
            className="row__poster">
          </Iframe>
          <Iframe
          src="https://www.youtube.com/embed/uFujdBUj5Io"
          title="YouTube video player" 
          frameborder="0" 
          allow="autoplay; fullscreen" 
          allowfullscreen
          className="row__poster">
          </Iframe>  
          <Iframe  
            src="https://www.youtube.com/embed/1v8QyP6WF64"
            title="YouTube video player" 
            frameborder="0" 
            allow="autoplay; fullscreen" allowfullscreen
            className="row__poster">
          </Iframe>
          <Iframe  
            src="https://www.youtube.com/embed/snmCVIFznms"
            title="YouTube video player" 
            frameborder="0" 
            allow="autoplay; fullscreen" allowfullscreen
            className="row__poster">
          </Iframe>
      <Title>심장</Title>
        <Iframe 
        src="https://www.youtube.com/embed/znYn1slXWh8" 
        title="YouTube video player" 
        frameborder="0" 
        allow="autoplay;"
        allowfullscreen
        className="row__poster">  
        </Iframe>
        <Iframe
        src="https://www.youtube.com/embed/6bNlBOtNV1o" 
        title="YouTube video player" 
        frameborder="0" 
        allow="autoplay; " 
        allowfullscreen
        className="row__poster">
        </Iframe>  
        <Iframe  
          src="https://www.youtube.com/embed/jct8qtBRp6w" 
          title="YouTube video player" 
          frameborder="0" 
          allow="autoplay; " allowfullscreen
          className="row__poster">
        </Iframe>
        <Iframe  
          src="https://www.youtube.com/embed/85OxiZscPWg" 
          title="YouTube video player" 
          frameborder="0" 
          allow="autoplay;" allowfullscreen
          className="row__poster">
        </Iframe>
      <Title>폐렴</Title>
        <Iframe  
          src="https://www.youtube.com/embed/dEpTfOS7BE4"
          title="YouTube video player" 
          frameborder="0" 
          allow="autoplay;" allowfullscreen
          className="row__poster">
        </Iframe> 
        <Iframe  
          src="https://www.youtube.com/embed/IMnH_LbiGF0" 
          title="YouTube video player"
          frameborder="0" 
          allow=" autoplay;" allowfullscreen
          className="row__poster">
        </Iframe>
        <Iframe
        src="https://www.youtube.com/embed/xN6Sl8m-j6g"
        title="YouTube video player" 
        frameborder="0" 
        allow="autoplay; " 
        allowfullscreen
        className="row__poster">
        </Iframe>  
        <Iframe  
          src="https://www.youtube.com/embed/LoQLQdKvz0o" 
          title="YouTube video player" 
          frameborder="0" 
          allow="autoplay; " allowfullscreen
          className="row__poster">
        </Iframe>
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

}

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