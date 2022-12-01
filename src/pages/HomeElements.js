import styled from "styled-components";

import bg1 from "./bg1.png";
import bg2 from "./bg2.jpg";
import bg3 from "./bg3.jpg";

const bgArray = [bg1, bg2, bg3];

const randomIndex = Math.floor(Math.random() * bgArray.length);

const backgroundImg = bgArray[randomIndex];

export const Bg = styled.div`
  background-image: url(${backgroundImg});
  position: cover;
  top: 0;
  left: 0;
  opacity: 0.4;
`;

