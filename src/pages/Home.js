import React from "react";
import { Bg } from "./HomeElements";

const Home = () => {
  return (
    <Bg>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <h1>Home</h1>
      </div>
    </Bg>
  );
};

export default Home;
