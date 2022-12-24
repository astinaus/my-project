import React from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 80px;
`;

const Details = (props) => {
  const { movie } = props;
  return (
    <DetailsBox
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}")`,
      }}
    >
      <Container>
        <Row>
          <Col>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="poster"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>
              {movie.title}
              <Badge bg="warning" text="dark">
                TMDB
              </Badge>
            </h3>
            <p>{movie.original_title}</p>
            <div>{movie.release_date}</div>
          </Col>
        </Row>
      </Container>
    </DetailsBox>
  );
};

export default Details;
