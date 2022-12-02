import Header from "components/commons/Header";
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "pages/main/Home";
import SignIn from "pages/Sign/SignIn"
import SignUp from "pages/Sign/SignAccount"
import "./App.css"
import { FooterContainer } from "./components/commons/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Movies" element={<Home/>} />
        <Route path="/Actors" element={<Home/>} />
        <Route path="/Directors" element={<Home/>} />
        <Route path="/Recommend" element={<Home/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      <>
      <FooterContainer />
      </>
    </Router>
  );
}

export default App;
