import React from "react";
import Home from "./pages/Home/Home";
import TitleCard from "./components/TitleCard/TitleCard";

import { Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
     
     
    </div>
  );
}

export default App;
