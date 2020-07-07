import React from "react";
import "./homepage.styles.scss";
import Directory from "../../component/directory/directory.component";
import BACKGROUND_IMAGES from "../../assets/background";

const HomePage = () => {
  let bg =
    BACKGROUND_IMAGES[Math.floor(Math.random() * BACKGROUND_IMAGES.length)];
  return (
    <div className="homepage">
      <div
        className="splash"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("${bg.imageUrl}")`,
        }}
      />
      <Directory />
    </div>
  );
};

export default HomePage;
