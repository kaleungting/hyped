import React from "react";
import Directory from "../../component/directory/directory.component";
import BACKGROUND_IMAGES from "../../assets/background";
import { HomepageContainer, Splash } from "./homepage.styles";

const HomePage = () => {
  let bg =
    BACKGROUND_IMAGES[Math.floor(Math.random() * BACKGROUND_IMAGES.length)];
  return (
    <HomepageContainer>
      <Splash
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("${bg.imageUrl}")`,
        }}
      />
      <Directory />
    </HomepageContainer>
  );
};

export default HomePage;
