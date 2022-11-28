import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import styled from "styled-components";

export default function LoginPage() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  const navigate = useNavigate();
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
    navigate("/MainPage")
  };

  return (
    <Container>
      <HomeContainer className="login">
        <Title>Safety Education</Title>
        <Title1>Login</Title1>
        <Input
          type="text"
          placeholder="아이디를 입력하세요"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button onClick={login}> 로그인 </Button>
      </HomeContainer >
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  flex-direction: column;
  width: 100;
  height: 100vh;
`
const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 600px;
  height: 400px;
  flex-direction: column;
  background-color : red;
`
const Input = styled.input`
  display: flex;
  justify-content: center;
  align-item: center;
  flex-direction: column;
  width : 400px;
  height : 40px;
`
const Button = styled.button`
  display : flex;
  justify-content: center;
  align-item: center;
  width:10%;
  height:10%;
  background-size: cover;
  border : none;
`
const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-item: center;
`
const Title1 = styled.h2`
  display: flex;
  justify-content: center;
  align-item: center;
`