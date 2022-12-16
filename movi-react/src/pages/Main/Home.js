import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import React, { useEffect, useState } from "react";
import { Bg, MainText } from "./HomeElements";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const getMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=762de036dfac5c9c2a0d44361d21efd1&language=ko-KR&page=1
      `
      )

      .then((response) => {
        console.log(response.data);
        setMovies(response.data);
      })

      .catch((error) => {
        console.log(error);
      })

      .finally(() => {});
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies.results);


  return (
    <Bg>
      <MainText>
        <h1>
          <br></br>
          World's Movies Here!!
        </h1>
        <br></br>
        <Container>
          <Row>
            <Col>
              <Carousel>
                {movies.results &&
                  movies.results.map((results, index) => {
                    return (
                      <Carousel.Item interval={1000} key={index} className="mb-5">
                        <img
                          className="w-200"
                          src={`https://image.tmdb.org/t/p/w200${results.poster_path}`}
                          alt="Movie slide"
                        />
                        <Carousel.Caption></Carousel.Caption>
                      </Carousel.Item>
                    );
                    
                  })}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </MainText>
    </Bg>
  );
};

export default Home;
