import styled from "styled-components";

const Footer = () => {
  return (
    <FooterBox>
      <div className="contents">
        <h1 className="title">Footer</h1>
      </div>
    </FooterBox>
  );
};

export default Footer;

const FooterBox = styled.div`
  height: 100px;
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
  }

  .title {
    font-weight: 600;
    font-size: 20px;
  }
`;
