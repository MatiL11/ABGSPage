import React from "react";
import { FlexContainer } from "../../styles/globalStyles";
import { InfoBarContainer } from "./styles";
import { ImagesInfo } from "../Imagesinfo/styles";

export const ImagesAndInfo = ({ imageRight, imageLeft }) => {
  const bodyTitles = ["Title Example", "Title Example", "Title Example"];

  const bodyTexts = [
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet ipsum vitae aliquam tincidunt ex ipsum tincidunt metus at cursus nisl neque ut nisi Sed nec nunc auctor lacinia lacus vitae euismod velit Nulla facilisi Sed auctor nisl et luctus ullamcorper elit augue ultricies ante sit amet lacinia nunc mauris sed nunc Sed euismod sem vitae consequat ullamcorper nunc",
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet ipsum vitae aliquam tincidunt ex ipsum tincidunt metus at cursus nisl neque ut nisi Sed nec nunc auctor lacinia lacus vitae euismod velit Nulla facilisi Sed auctor nisl et luctus ullamcorper elit augue ultricies ante sit amet lacinia nunc mauris sed nunc Sed euismod sem vitae consequat ullamcorper nunc",
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet ipsum vitae aliquam tincidunt ex ipsum tincidunt metus at cursus nisl neque ut nisi Sed nec nunc auctor lacinia lacus vitae euismod velit Nulla facilisi Sed auctor nisl et luctus ullamcorper elit augue ultricies ante sit amet lacinia nunc mauris sed nunc Sed euismod sem vitae consequat ullamcorper nunc",
  ];
  return (
    <InfoBarContainer>
      <FlexContainer row={true}>
        <FlexContainer>
          <ImagesInfo src={imageLeft} />
        </FlexContainer>
        <FlexContainer>
          <h1>{bodyTitles[0]}</h1>
          <p>{bodyTexts[0]}</p>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer row={true}>
        <FlexContainer>
          <h1>{bodyTitles[1]}</h1>
          <p>{bodyTexts[1]}</p>
        </FlexContainer>
        <FlexContainer>
          <ImagesInfo src={imageRight} />
        </FlexContainer>
      </FlexContainer>
      <FlexContainer row={true}>
        <FlexContainer>
          <ImagesInfo src={imageLeft} />
        </FlexContainer>
        <FlexContainer>
          <h1>{bodyTitles[2]}</h1>
          <p>{bodyTexts[2]}</p>
        </FlexContainer>
      </FlexContainer>
    </InfoBarContainer>
  );
};

export default ImagesAndInfo;
