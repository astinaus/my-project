import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Main/Home";
import Movies from "pages/Movies/Movies";
import Actors from "pages/Actors/Actors";
import Directors from "pages/Directors/Directors";
import Recommends from "pages/Recommends/Recommends";
import Login from "pages/Sign/Login";
import SignUp from "pages/Sign/SignAccount";
import "./App.css";
import Header from "components/layouts/Header/Header";
import Footer from "components/layouts/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Actors" element={<Actors />} />
        <Route path="/Directors" element={<Directors />} />
        <Route path="/Recommends" element={<Recommends />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
