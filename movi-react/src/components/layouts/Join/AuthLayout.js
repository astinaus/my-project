import React from "react";
import styled from "styled-components";
const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const AuthLayoutWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: skyblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContainerBox = styled.div`
  .logo-area {
    display: flex;
    padding-bottom: 2rem;
    justify-content: center;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 5px;
`;

const AuthLayout = ({ children }) => {
  return (
    <Main>
      <AuthLayoutWrapper>
        <ContainerBox>
          <div className="logo-area">
            <a href="/">
              <img src="./logo.png" alt="logo"></img>
            </a>
          </div>
          {children}
        </ContainerBox>
      </AuthLayoutWrapper>
    </Main>
  );
};

export default AuthLayout;
