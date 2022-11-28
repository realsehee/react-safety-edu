import React, { useCallback, useState } from "react";
import useInput from "react-dom"
import styled from "styled-components";

export default function LoginPage() {
  const Login = () => {
    const [id, onChangeId, setId] = useInput("");
    const [pwd, onChangePwd, setPwd] = useInput("");
  
    const onReset = useCallback(() => {
      setId("");
      setPwd("");
    }, [setId, setPwd]);
  
    const onLogin = () => {
      if (!id || !pwd) {
        alert("모든 값을 정확하게 입력해주세요");
        return;
      }
  
      alert("로그인");
      onReset();
    };
  
    return (
      <Container>
        <Title>Safety Education</Title>
        <form>
          <InputContainer>
            <InputItem>
              <InputLabel htmlFor="user_id">아이디:</InputLabel>
              <InputDiv>
                <MyInput
                  id="user_id"
                  value={id}
                  onChange={onChangeId}
                  placeholder="아이디를 입력해주세요"
                  required
                />
                <hr />
              </InputDiv>
            </InputItem>
            <InputItem>
              <InputLabel htmlFor="user_pwd">비밀번호:</InputLabel>
              <InputDiv>
                <MyInput
                  id="user_pwd"
                  value={pwd}
                  onChange={onChangePwd}
                  placeholder="비밀번호를 입력해주세요"
                  required
                />
                <hr />
              </InputDiv>
            </InputItem>
          </InputContainer>
        </form>
        <LoginBtn type="submit" value="로그인" onClick={onLogin}/>
        <Link to="/signup">
          <LoginBtn type="submit" value="회원가입" />
        </Link>
      </Container>
    );
  };
}
  
const Container = styled.div`
  width : 100%;
  height : 100%;
  color : #111;
`
const Title = styled.div`
  width : 100%;
  height : 100%;
  color : #111;
`
const InputContainer = styled.div`
  width : 100%;
  height : 100%;
`
const InputItem = styled.div`
  width : 100%;
  height : 100%;
`
const InputLabel = styled.div`
  width : 100%;
  height : 100%;
`
const InputDiv = styled.div`
  width : 100%;
  height : 100%;
`
const MyInput = styled.div`
  width : 100%;
  height : 100%;
`
const LoginBtn = styled.div`
  width : 100%;
  height : 100%;
`
const Link = styled.div`
  width : 100%;
  height : 100%;
`