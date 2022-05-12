import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import MyModal from "./Modal";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/cat" element={<Home />} />
        <Route path="/" element={<Home />}>
          <Route path="cat/:id" element={<MyModal />} />
          <Route path="cat/:id/:tab" element={<MyModal />} />
          <Route path="cat/:id/:tab/:breed" element={<MyModal />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
