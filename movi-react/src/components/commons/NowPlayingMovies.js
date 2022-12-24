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
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 765,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 100,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
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
          nowPlaying.results.map((results, index) => (
            <Col key={index}>
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
                    color: "white",
                  }}
                >
                  <Card.Title
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    <div>{results.title}</div>
                  </Card.Title>
                  <Card.Text style={{ fontSize: "14px" }}>
                    <div>개봉일 : {results.release_date}</div>
                    <div>평점 : {results.vote_average}/10</div>
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
