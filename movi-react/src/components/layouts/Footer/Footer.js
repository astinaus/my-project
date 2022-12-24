import {  Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <FooterBox>
      <Container className="pt-1">
        <Row>
          <Col>
            <div className="contents">
              <img src="./logo.png" alt="logo" />
            </div>
          </Col>
        </Row>
        <Row className="pt-2">
          <div className="circle">
            <a
              href="https://github.com/astinaus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>

            <a
              href="https://www.instagram.com/vin_0407/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
          <div className="contents pt-3 ">
            <a href="/Movies">Movies</a>
            <a href="/Actors">Actors</a>
            <a href="/Directors">Directors</a>
            <a href="/Recommends">Recommends</a>
          </div>
          <div className="copyright">
            <span>copyright</span>
            <FontAwesomeIcon icon={faCopyright} size="lg" />
            <span>2022 by astinaus</span>
          </div>
        </Row>
      </Container>
    </FooterBox>
  );
};

export default Footer;

const FooterBox = styled.div`
  height: 225px;
  margin-top: auto;
  background-color: black;

  .contents {
    width: 96%;
    max-width: 1100px;
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    a {
      text-decoration: none;
      color: white;

      &:hover {
        color: dodgerblue;
      }
    }

    a + a {
      margin-left: 10px;
    }
  }

  .title {
    font-weight: 600;
    font-size: 20px;
  }

  .circle {
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
    max-width: 1100px;
    padding: 0 10px;
    overflow: hidden;

    a {
      height: 35px;
      width: 35px;
      border-radius: 50%;
      padding-left: 2px;

      text-align: center;
      line-height: 35px;
      font-size: 18px;
      color: white;

      background: dodgerblue;

      margin: 0 4px;

      border: 1px solid dodgerblue;
      transition: all 0.3s ease;

      &:hover {
        color: dodgerblue;
        background-color: white;
      }
    }
  }

  .copyright {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    color: gray;
    font-size: 10px;
  }
`;
