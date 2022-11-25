import Counter from "pages/Counter";
import Main from "pages/Main";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
