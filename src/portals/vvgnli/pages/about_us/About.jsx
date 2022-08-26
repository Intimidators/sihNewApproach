import React from "react";
import { useSelector } from "react-redux";
import SubContentRendering from "../../sub__content__rendering/SubContentRendering";

import "./about.css";
import AboutUsSubmenu from "./components/about__us__submenu/AboutUsSubmenu";
const About = () => {
  const { state } = useSelector((state) => state.vvgnli);
  return (
    <>
      {state === "vvgnli" ? (
        <div className="about">
          <div className="about__container">
            <AboutUsSubmenu />
            <SubContentRendering />
          </div>
        </div>
      ) : (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
            fontSize: "1.2rem",
          }}
        >
          this {state} about us page
        </div>
      )}
    </>
  );
};

export default About;
