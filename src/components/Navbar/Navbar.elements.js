import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 100px;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #fff;
`;

export const NavbarWrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1450px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #fff;

  @media screen and (max-width: 960px) {
    justify-content: space-between;
  }
`;

export const NavbarLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1.25rem;
  height: 100%;
`;

export const NavbarLogo = styled.img`
  width: 80px;
  height: 80px;
  cursor: pointer;
  animation: pulse 2s linear infinite;

  @keyframes pulse {
    0% {
      transform: scale(1); /* Tamaño normal al inicio */
    }
    50% {
      transform: scale(
        1.1
      ); /* Aumenta el tamaño al 110% a la mitad de la animación */
    }
    100% {
      transform: scale(1); /* Vuelve al tamaño normal al final */
    }
  }
`;

export const NavbarMenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    padding-right: 1.25rem;
    color: #000;
    cursor: pointer;
  }
`;

export const NavbarMenu = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 100px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    flex-direction: column;
    transition: all 0.5s ease-in;
    background-color: rgb(16, 58, 188);
    padding-bottom: 3rem;
  }
`;

export const NavbarMenuItems = styled.li`
  padding: 0.5rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 400;

  @media screen and (max-width: 960px) {
    width: 70%;
    height: 40px;
    margin: 0.5rem 0;

    border-bottom: 1px solid rgba(100, 100, 100, 0.5);
    box-sizing: border-box;
  }
`;

export const NavBarMenuItemsLink = styled.a`
  text-decoration: none;
  color: #000;
  cursor: pointer;
  position: relative;

  &:hover {
    color: #103abc;
    transition: 0.4s ease-in;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #103acd;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.2s ease-in-out;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  @media screen and (max-width: 960px) {
    color: #fff;
    text-shadow: 0 0 30px rgba(0, 0, 0, 0.9);
  }
`;

export const NavBarButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-right: 0.75rem;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 10vh;
    position: absolute;
    top: 100px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    flex-direction: column;
    transition: all 0.5s ease-in;
    background-color: rgb(16, 58, 188);
    padding: 0;
  }
`;

export const NavBarButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.5rem;
  margin: 0 0.5rem;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  background-color: #103abc;
  cursor: pointer;
  transition: 0.4s ease-in;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #000;
    transition: 0.4s ease-in;
  }

  @media screen and (max-width: 960px) {
    width: auto;
    padding: 0.5rem 0.5rem;
    background-color: black;
    border: 2px solid rgba(100, 100, 100, 0.6);
    border-radius: 50px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  }
`;

export const NavBarButtonLink = styled.a`
  color: #fff;
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  padding-right: 5px;
  text-decoration: none;

  @media screen and (max-width: 960px) {
    font-size: 1rem;
    color: #fff;
  }
`;
