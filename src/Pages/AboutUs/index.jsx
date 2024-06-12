import React from "react";
import robotimg from "../../assets/robo.png";
import surveyimg from "../../assets/survey.png";
import circleVideo from "../../assets/rotatingcircle.mp4";
import "./style.css";

const AboutUs = () => {
  return (
    <div className="about-section">
      <div className="about-main-heading-1">Who we are</div>
      <div className="about-part-1">
        <div className="about-part-1-image-container">
          <img src={robotimg} className="about-part-1-image" alt="" />
        </div>
        <div className="about-part-1-content">
          <div className="about-part-1-content-heading">
            Simplify your life. Free up your time.
          </div>
          <div className="about-part-1-content-text">
            Imagine robots handling everyday chores, letting you relax, spend
            time with family, or chase your dreams. That&apos;s assisted living,
            and AssistAI Labs is making it a reality.
          </div>
        </div>
      </div>

      {/* part 2 of about page  */}

      <div className="about-main-heading-1">What we do</div>

      <div className="about-part-2">
        <div className="about-part-2-content">
          Tired of repetitive chores stealing your precious time at home? <br />
          At AssistAI Labs, we&apos;re revolutionizing home life with
          intelligent robotic companions designed to tackle your everyday tasks.{" "}
          <br />
          Here&apos;s how our AI-powered robots become your helping hand:
        </div>
        <div className="about-part-2-video-container">
          <video autoPlay loop muted disablePictureInPicture preload="auto">
            <source src={circleVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* part 3  */}

      <div className="survey-container">
        <div className="survey-content-part">
        <div className="survey-title">Help us make smarter Homes</div>
          <div className="survey-content">
            Your thoughts shape our robots. Take our quick survey (5 min) and
            share what matters in your home life.
            <br />
            <br />
            Click below to share your voice.
          </div>
          <div className="survey-button-part">
            <button className="survey-button">Share</button>
          </div>
        </div>
        <div className="survey-image-part">
          <img src={surveyimg} className="survey-image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
