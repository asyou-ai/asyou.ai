import React from "react";

import {
  MainContainer,
  MainNameContainer,
  MainNameImage,
  MainSubtitleContainer,
  MainButtonsContainer,
  MainButton,
} from "@main/styles/index.styles";

const Main = () => (
  <MainContainer>
    <MainNameContainer>
      {/* prettier-ignore */}
      asy
      <MainNameImage />u
    </MainNameContainer>
    <MainSubtitleContainer>Never experience a bug again.</MainSubtitleContainer>
    <MainButtonsContainer>
      <MainButton href="/luther">luther</MainButton>
      <MainButton
        href="https://docs.google.com/presentation/d/15kFgqO2cUFGYlfC5Dd6wL-i_AfXpiEE4Y1pIGD-HRw8/edit?usp=sharing"
        delay="0.2s"
      >
        read the deck
      </MainButton>
      <MainButton
        href="https://www.linkedin.com/in/maxtretikov/recent-activity/all/"
        delay="0.4s"
      >
        blog
      </MainButton>
    </MainButtonsContainer>
  </MainContainer>
);

export default Main;
