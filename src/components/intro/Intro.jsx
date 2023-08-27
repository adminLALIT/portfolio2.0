import React from "react";
import "./intro.css";
import Me from "../../assets/man.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Lalit Kumar</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">PHP Developer</div>
              <div className="i-title-item">JavaScript Developer</div>
              <div className="i-title-item">NodeJS Developer</div>
              <div className="i-title-item">ReactJS Developer</div>
            </div>
          </div>
          <div className="i-desc">
            I design and develop services for customers of all sizes, specialization in creating stylish, modern websites, web services and online stores.
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img"/>
      </div>
    </div>
  );
};

export default Intro;
