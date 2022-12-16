import Button from "components/commons/Button";
import React from "react";
import styled from "styled-components";

const AuthFormWrapper = styled.div`
  h3 {
    margin: 0;
    color: gray;
    margin-bottom: 1rem;
  }
`;

const ButtonMarginTop = styled(Button)`
  margin-top: 10px;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid gray;
  padding-bottom: 0.5rem;
  outline: none;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid gray;
  }

  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: 1px solid black;
    text-decoration: underline;
    &:hover {
      color: 1px solid blue;
      cursor: pointer;
    }
  }
`;

const textMap = {
  login: "로그인",
  register: "회원가입",
};

const AuthForm = ({ type }) => {
  const text = textMap[type];
  return (
    <AuthFormWrapper>
      <h3>{text}</h3>
      <form>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
        />
        <StyledInput
          autoComplete="current-password"
          name="password"
          placeholder="비밀번호"
          type="password"
        />

        {type === "register" && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
          />
        )}
        <ButtonMarginTop fullWidth>{text}</ButtonMarginTop>
      </form>
      <Footer>
        {type === "login" ? (
          <a href="/Signup">
            <div>아이디가 없다면 회원가입</div>
          </a>
        ) : (
          <a href="Login">
            <div>이미 아이디가 있다면 로그인</div>
          </a>
        )}
      </Footer>
    </AuthFormWrapper>
  );
};

export default AuthForm;
