import React from "react";
import { Bg, MainText } from "./HomeElements";
import { Container, Row, Badge } from "react-bootstrap";
import NowPlayingMovies from "components/commons/NowPlayingMovies";
import PopularMovies from "components/commons/PopularMovies";

const Home = () => {
  return (
    <Bg>
      <MainText>
        <Container>
          <h1>
            <br></br>
            World's Movies Here!!
          </h1>
          <br></br>
          <Row>
            <div>
              <Badge className="ms-3" bg="dark" style={{ fontSize: "24px" }}>
                현재 상영중
              </Badge>
            </div>
            <NowPlayingMovies />
            <div>
              <Badge className="ms-3" bg="dark" style={{ fontSize: "24px" }}>
                인기 영화
              </Badge>
            </div>
            <PopularMovies />
          </Row>
        </Container>
      </MainText>
    </Bg>
  );
};

export default Home;
