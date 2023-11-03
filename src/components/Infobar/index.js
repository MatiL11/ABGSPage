import React from "react";
import { FlexContainer } from "../../styles/globalStyles";
import { InfoBarContainer } from "./styles";

export const Infobar = () => {
  const bodyTitle = "OUR SERVICES";

  return (
    <InfoBarContainer>
      <FlexContainer>
        <h1>{bodyTitle}</h1>
      </FlexContainer>
      <FlexContainer row={true}>
        <FlexContainer>
          <p>
            We offer a wide range of services to meet all your transportation
            needs. Our services include:
          </p>

          <ul>
            <li>International Air Freight</li>
            <li>International Ocean Freight</li>
            <li>Ground Freight Services</li>
            <li>Customs Clearance</li>
            <li>Warehousing</li>
            <li>Insurance</li>
            <li>Door to Door</li>
            <li>Port to Port</li>
          </ul>
        </FlexContainer>
        <FlexContainer>
          <p>
            We offer a wide range of services to meet all your transportation
            needs. Our services include:
          </p>

          <ul>
            <li>International Air Freight</li>
            <li>International Ocean Freight</li>
            <li>Ground Freight Services</li>
            <li>Customs Clearance</li>
            <li>Warehousing</li>
            <li>Insurance</li>
            <li>Door to Door</li>
            <li>Port to Port</li>
          </ul>
        </FlexContainer>
        <FlexContainer>
          <p>
            We offer a wide range of services to meet all your transportation
            needs. Our services include:
          </p>

          <ul>
            <li>International Air Freight</li>
            <li>International Ocean Freight</li>
            <li>Ground Freight Services</li>
            <li>Customs Clearance</li>
            <li>Warehousing</li>
            <li>Insurance</li>
            <li>Door to Door</li>
            <li>Port to Port</li>
          </ul>
        </FlexContainer>
      </FlexContainer>
    </InfoBarContainer>
  );
};

export default Infobar;
