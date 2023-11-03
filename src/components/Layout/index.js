import React from "react";
import Navbar from "../Navbar/Navbar";
import Logo from "../../assets/logoABGS.png";
import FotoHero from "../../assets/CamionFondo.jpg";
import Hero from "../Hero";
import Infobar from "../Infobar";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar logo={Logo} />
      <Hero fotohero={FotoHero} />
      <Infobar />
      <main>{children}</main>
    </>
  );
};
