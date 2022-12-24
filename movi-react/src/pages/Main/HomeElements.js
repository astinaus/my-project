import styled from "styled-components";
import bg1 from "./bg1.png";
import bg2 from "./bg2.jpg";
import bg3 from "./bg3.jpg";

// 배경이미지 랜덤 출력
const bgArray = [bg1, bg2, bg3];

const randomIndex = Math.floor(Math.random() * bgArray.length);

const backgroundImg = bgArray[randomIndex];

export const Bg = styled.div`
  padding-top: 80px;
  height: 160vh;
  align-items: center;
  justify-contents: center;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  ::before {
    content: "";
    background: URL(${backgroundImg}) no-repeat;
    background-size: cover;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    opacity: 0.45;
  }
`;

export const MainText = styled.div`
  align-items: center;
  justify-content: center;
  font-size: 32;
  position: relative;
  
`;
