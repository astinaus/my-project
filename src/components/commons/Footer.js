import React from "react";
import Footer from "../footer";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>About</Footer.Title>
            <Footer.Link href="/Home">Introduce</Footer.Link>
            <Footer.Link href="#">Story</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Home</Footer.Title>
            <Footer.Link href="#">Introduce</Footer.Link>
            <Footer.Link href="#">Story</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Actors</Footer.Title>
            <Footer.Link href="#">Introduce</Footer.Link>
            <Footer.Link href="#">Story</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Directors</Footer.Title>
            <Footer.Link href="#">Introduce</Footer.Link>
            <Footer.Link href="#">Story</Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
