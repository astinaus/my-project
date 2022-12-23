import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  vertical: false,
  autoplay: true,
  pauseOnHover: true,
};

const NowPlayingMovies = () => {
  const [nowPlaying, setNowPlaying] = useState([]);

  const getMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=762de036dfac5c9c2a0d44361d21efd1&language=ko-KR&page=1
            `
      )

      .then((response) => {
        console.log(response.data);
        setNowPlaying(response.data);
      })

      .catch((error) => {
        console.log(error);
      })

      .finally(() => {});
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Container>
      <Slider {...settings}>
        {nowPlaying.results &&
          nowPlaying.results.map((results) => (
            <Col>
              <Card className="w-100 h-100 mb-5">
                <Card.Img
                  style={{ width: "100%", height: "320px" }}
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${results.poster_path}`}
                  alt="poster"
                />
                <Card.Body
                  style={{
                    width: "100%",
                    height: "130px",
                    backgroundColor: "black",
                  }}
                >
                  <Card.Title
                    style={{
                      color: "white",
                      fontSize: "17px",
                      fontWeight: "bold",
                    }}
                  >
                    <div>{results.title}</div>
                  </Card.Title>
                  <Card.Text style={{ color: "white" }}>
                    <p>개봉일 : {results.release_date}</p>
                    <p>평점 : {results.vote_average}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Slider>
    </Container>
  );
};
export default NowPlayingMovies;
