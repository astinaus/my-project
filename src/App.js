import Header from "components/commons/Header";
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "pages/Home";
import "./App.css"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
