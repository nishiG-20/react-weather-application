import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import FindWeather from "./findWeather";

export default function MainComponent() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/findWeather" element={<FindWeather />} />
      </Routes>
    </>
  );
}
