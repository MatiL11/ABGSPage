import React from "react";
import { DropdownContainer } from "./styles";
import { FlexContainer } from "../../../styles/globalStyles";
import {
  NavBarButton,
  NavBarButtonLink,
  NavbarMenuItems,
  NavBarMenuItemsLink,
} from "../Navbar.elements";

import { MdOutlineLocalShipping } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";

const ButtonsContainer = ({ handleClick }) => {
  return (
    <FlexContainer row={true}>
      <NavBarButton onClick={handleClick}>
        <NavBarButtonLink>Truncking Rates</NavBarButtonLink>
        <MdOutlineLocalShipping size={"30px"} color="white" />
      </NavBarButton>
      <NavBarButton onClick={handleClick}>
        <NavBarButtonLink>Live Trancking</NavBarButtonLink>
        <LuMapPin size={"30px"} color="white" />
      </NavBarButton>
    </FlexContainer>
  );
};

const MenuItems = ({ handleClick, items }) => {
  return (
    <FlexContainer onClick={handleClick}>
      {items.map((item, index) => {
        return (
          <NavbarMenuItems key={index} onClick={handleClick}>
            <NavBarMenuItemsLink>{item}</NavBarMenuItemsLink>
          </NavbarMenuItems>
        );
      })}
    </FlexContainer>
  );
};

const Dropdown = ({ handleButtonClick, items, open }) => {
  return (
    <>
      <DropdownContainer isOpen={open}>
        <ButtonsContainer handleClick={handleButtonClick} />
        <MenuItems handleClick={handleButtonClick} items={items} />
      </DropdownContainer>
    </>
  );
};

export default Dropdown;
