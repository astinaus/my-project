import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Main/Home";
import Movies from "pages/Movies/Movies"
import Actors from "pages/Actors/Actors"
import Directors from "pages/Directors/Directors"
import Recommends from "pages/Recommends/Recommends"
import SignIn from "pages/Sign/SignIn";
import SignUp from "pages/Sign/SignAccount";
import "./App.css";
import Layout from "components/layouts/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Actors" element={<Actors />} />
          <Route path="/Directors" element={<Directors />} />
          <Route path="/Recommends" element={<Recommends />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
