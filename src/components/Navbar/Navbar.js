import React, { useState } from "react";
import { useIsMobile } from "../../hooks/use-ismobile/useIsMobile";
import Dropdown from "./Dropdown";
import {
  NavBarButton,
  NavBarButtonLink,
  NavBarButtons,
  NavBarMenuItemsLink,
  NavbarContainer,
  NavbarLogo,
  NavbarLogoContainer,
  NavbarMenu,
  NavbarMenuIcon,
  NavbarMenuItems,
  NavbarWrapper,
} from "./Navbar.elements";
import { FaTimes, FaBars } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";

export const Navbar = ({ logo }) => {
  const [click, setClick] = useState(false);
  const { isMobile } = useIsMobile();
  const handleClick = () => setClick(!click);

  const items = [
    "Home",
    "Services",
    "News",
    "Tracking",
    "Quotes",
    "About Us",
    "Contact Us",
  ];

  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarLogoContainer>
            <NavbarLogo src={logo} />
          </NavbarLogoContainer>
          <NavbarMenuIcon onClick={handleClick}>
            {click ? <FaTimes size={"40px"} /> : <FaBars size={"40px"} />}
          </NavbarMenuIcon>
          {!isMobile && (
            <NavbarMenu click={click}>
              {items.map((item, index) => (
                <NavbarMenuItems key={index} onClick={handleClick}>
                  <NavBarMenuItemsLink>{item}</NavBarMenuItemsLink>
                </NavbarMenuItems>
              ))}
            </NavbarMenu>
          )}
          {!isMobile && (
            <NavBarButtons>
              <NavBarButton onClick={handleClick}>
                <NavBarButtonLink>Trucking Rates</NavBarButtonLink>
                <MdOutlineLocalShipping size={"30px"} color="white" />
              </NavBarButton>
              <NavBarButton onClick={handleClick}>
                <NavBarButtonLink>Live Tracking</NavBarButtonLink>
                <LuMapPin size={"30px"} color="white" />
              </NavBarButton>
            </NavBarButtons>
          )}
        </NavbarWrapper>
      </NavbarContainer>
      {isMobile && click && (
        <Dropdown handleButtonClick={handleClick} items={items} open={click} />
      )}
    </>
  );
};

export default Navbar;
