import axios from '../api/axios';
import React, { useEffect, useState } from 'react'
import requests from '../api/requests';
import "./Banner.css";
import styled from "styled-components";
export default function Banner() {
    const [movie, setMovie] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    useEffect(() => {
        fetchData();
    }, [])
    
    const fetchData = async () => {
        //현재 상영 중인 영화 정보를 가져오기 (여러 영화)
        const request = await axios.get(requests.fetchNowPlaying); //await axios는 비동기로 요청을 보냄 -> 바로 정보가 오지않음
        
        //여러 영화 중 영화 하나의 ID를 가져오기
        const movieId = 
        request.data.results[
            Math.floor(Math.random() * request.data.results.length)
        ].id;

        // 특정 영화의 더 상세한 정보를 가져오기( 비디오 정보도 포함)
        const { data: movieDetail} = await axios.get(`movie/${movieId}`,{
            params: { append_to_response: "videos" },
        });
        setMovie(movieDetail) //movie 안에 정보가 다 들어감
    };

    // const truncate = (str, n) =>{
    //     return str?.length > n ? str.substr(0, n-1) + "..." : str;
    // }

    if(!isClicked){
        return ( 
            <header
                className='banner'    //className={`nav ${show && "nav__black"}`}>
                style={{
                    // backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
                    backgroundImage: `url("https://i.ytimg.com/vi/RpviDceU-_s/maxresdefault.jpg")`,
                    backgroundPosition: "top center",
                    backgroundSize : "cover",
                }}
                >
                    <div className="banner__contents">
                        {/* <h1 className="banner__title">
                            {movie.title || movie.name || movie.original_name}
                        </h1> */}
    
                        <div className="banner__buttons">
                            <button className="banner__button play"
                            onClick={() => setIsClicked(true)}>Play</button>
                            {/* <button className="banner__button info">More Information</button> */}
                        </div>
                        {/* <h1 className='banner__description'>{truncate(movie.overview, 100)}</h1> */}
                    </div>
                    <div className='banner--fadeBottom'></div>            
            </header>
      )
    } else{
        return(
            <Container>
                <HomeContainer>
                <Iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/RpviDceU-_s" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </Iframe>
                    {/* <Iframe width="640" 
                    height="360" 
                    src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`} 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="autoplay; fullscreen" 
                    allowfullscreen>

                    </Iframe> */}
                </HomeContainer>
            </Container>
        )
    }
    
}
const Iframe = styled.iframe`
    width : 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.65;
    border: none;

    &::after{
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
`

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
`