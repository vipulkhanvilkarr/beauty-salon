import "../styles/Home.css";
import homePageBackground from "../assets/Home/home page background.jpg"; // Ensure the path and filename are correct
import React from 'react';

const Home = () => {
  const isMobile = window.innerWidth <= 768; // Example condition to check if the device is mobile

  const wrapWithSpan = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>{char}</span>
    ));
  };

  return (
    <div className={isMobile ? "home-mobile" : "home"}>
      <div className={isMobile ? "home-container-mobile" : "home-container"}>
        <div className={isMobile ? "home-image-container-mobile" : "home-image-container"}>
          <img src={homePageBackground} alt="Home Background" className={isMobile ? "home-image-mobile" : "home-image"} />
        </div>
        <div className={isMobile ? "home-content-mobile" : "home-content"}>
          <h1 className={isMobile ? "home-title-mobile" : "slide-in-left fade-in-letters"}>{wrapWithSpan("Feel Beautiful, Be Confident")}</h1>
          <h2 className={isMobile ? "home-subtitle-mobile" : "slide-in-right fade-in-letters"}>{wrapWithSpan("Welcome to Mantra Salon – Where Beauty Blooms!")}</h2>
          <p className="typewriter">
            At Mantra Salon, we believe self-care is not a luxury—it's a necessity.
           
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;