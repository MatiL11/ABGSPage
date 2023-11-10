import React from "react";
import { FlexContainer } from "../../styles/globalStyles";
import { BodyInfo, InfoBarContainer } from "./styles";

export const Infobar = () => {
  const bodyTitle = "OUR SERVICES";

  const ServiceSection = () => (
    <BodyInfo>
      <FlexContainer>
        <h2>
          We offer a wide range of services to meet all your transportation
          needs. Our services include:
        </h2>
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
    </BodyInfo>
  );

  return (
    <InfoBarContainer>
      <FlexContainer>
        <h1>{bodyTitle}</h1>
      </FlexContainer>
      <FlexContainer row={true}>
        <ServiceSection />
        <ServiceSection />
        <ServiceSection />
      </FlexContainer>
    </InfoBarContainer>
  );
};

export default Infobar;
