import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;

  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.3)
  );
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  overflow: hidden;
  z-index: -1;
`;

export const HeroShadow = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  padding-bottom: 2rem;
  padding-top: 2rem;
`;

export const HeroTitles = styled.div`
  h1 {
    color: #fff;
    font-size: 4rem;
    font-weight: 600;
    text-align: center;
    margin: 0 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #ffffff;
  margin: 0;
  padding: 0;
  font-weight: bold;
`;
