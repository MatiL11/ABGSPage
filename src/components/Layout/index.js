import React from "react";
import Navbar from "../Navbar/Navbar";
import Logo from "../../assets/logoABGS.png";
import FotoHero from "../../assets/CamionFondo.jpg";
import Hero from "../Hero";
import Infobar from "../Infobar";
import ImagesAndInfo from "../Imagesinfo";
//import ImageOne from "../../assets/ImageOne.jpg";
//import ImageTwo from "../../assets/ImageTwo.jpg";
import Sample from "../../assets/Sample.png";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar logo={Logo} />
      <Hero fotohero={FotoHero} />
      <Infobar />
      <ImagesAndInfo imageRight={Sample} imageLeft={Sample} />
      <main>{children}</main>
    </>
  );
};
