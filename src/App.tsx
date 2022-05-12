import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import MyModal from "./Modal";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat" element={<Home />}>
          <Route path=":id" element={<MyModal />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
