import React, { useEffect } from "react";
import { gsap, Power2 } from "gsap";
import { HeroContainer, HeroImage, HeroShadow, HeroTitles } from "./styles";
import { FlexContainer } from "../../styles/globalStyles";

export const Hero = ({ fotohero }) => {
  const heroTitles = [
    "AB GROUP SHIPPING",
    "LEADERS IN INTERNATIONAL LOGISTICS",
    "GROUND FREIGHT SERVICES",
  ];

  const heroClasses = ["title", "title2", "title3"];

  useEffect(() => {
    const timeLine = gsap.timeline({
      defaults: {
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: Power2.easeInOut,
      },
    });

    const titulo = document.querySelectorAll(".title");
    const titulo2 = document.querySelectorAll(".title2");
    const titulo3 = document.querySelectorAll(".title3");
    const images = document.querySelectorAll(".image");
    timeLine
      .from(images, { y: 50 })
      .from(titulo, { y: -50 }, "-=0.2")
      .from(titulo2, {}, "-=0.5")
      .from(titulo3, { y: 50 }, "-=0.5");
  }, []);

  return (
    <HeroContainer>
      <HeroImage className="image" src={fotohero} />
      <FlexContainer>
        <HeroShadow>
          <HeroTitles>
            {heroTitles.map((title, index) => (
              <h1 className={heroClasses[index]} key={index}>
                {title}
              </h1>
            ))}
          </HeroTitles>
        </HeroShadow>
      </FlexContainer>
    </HeroContainer>
  );
};

export default Hero;
