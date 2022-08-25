import React from "react";
import { Routes, Route } from "react-router-dom";
import "./webinars.css";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";


const Webinars = () => {
  return (
    <>
      <div className="webinars">
        <div className="webinars__container">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Webinars;
