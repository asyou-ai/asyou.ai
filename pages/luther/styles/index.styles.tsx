import styled, { keyframes } from "styled-components";

import { Archivo, Climate_Crisis, Roboto_Mono } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"], weight: "variable" });
const climate_crisis = Climate_Crisis({ subsets: ["latin"] });
const roboto_mono = Archivo({ subsets: ["latin"], weight: "900" });

export const LutherContainer = styled.div`
  margin: 0px;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;

  background: rgb(2, 0, 36);
  background: linear-gradient(
    135deg,
    rgba(2, 0, 36, 1) 31%,
    rgba(45, 4, 82, 1) 58%,
    rgba(0, 72, 85, 1) 100%
  );

  overflow-x: hidden;
`;

const strokedCreationAnimation = keyframes`
	from {
		stroke-dasharray: 15, 310;
		stroke-dashoffset: 48;
	}
`;

const heroCreationAnimation = keyframes`
	from {
		stroke-dasharray: 204, 1650;
		stroke-dashoffset: 48;
	}
`;

const strokedHideAnimation = keyframes`
	0% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`;

const strokedTextAnimation = keyframes`
	0% {
		transform: translateX(10%);
		opacity: 0;
  	}
  	100% {
		transform: translateX(0);
		opacity: 1;
  	}
`;

type LutherStrokedContainerProps = {
  delay: string;
};

const LutherHeroContainer = styled.div<LutherStrokedContainerProps>`
  position: absolute;
  width: 100%;
  height: 65%;
  top: 10%;
  left: 0px;

  box-sizing: inherit;
  transition-property: all;
  transition-duration: 0.6s;
  transition-timing-function: ease;

  svg {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    animation: ${strokedHideAnimation} ${(props) => props.delay} linear;
  }

  rect {
    fill: none;
    stroke: #fff;
    stroke-width: 3;
    stroke-dasharray: 2594, 0;
    transition: all 0.35s linear;

    animation: ${heroCreationAnimation} 1s ease ${(props) => props.delay};
  }
`;

type LutherHeroProps = {
  delay?: string;
  children: React.ReactNode;
};

export const LutherHero = (props: LutherHeroProps) => (
  <LutherHeroContainer delay={props.delay || "0s"}>
    <svg>
      <rect x="0" y="0" fill="none" width="100%" height="100%" />
    </svg>
    <span>{props.children}</span>
  </LutherHeroContainer>
);

const fadeInFromBelowAnimation = keyframes`
	0% {
    	transform: translate(-50%, 0%);
		opacity: 0;
  	}
  	100% {
    	transform: translate(-50%, -50%);
		opacity: 1;
  	}
`;

const fadeInFromAboveAnimation = keyframes`
	0% {
    	transform: translate(-50%, -70%);
		opacity: 0;
  	}
  	100% {
    	transform: translate(-50%, -50%);
		opacity: 1;
  	}
`;

export const LutherNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: white;
  font-family: ${climate_crisis.style.fontFamily};
  font-size: 50pt;

  animation: ${fadeInFromAboveAnimation} 0.8s ease-out 0s 1 normal forwards;
`;

export const LutherSubtitleContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: white;
  font-family: Times New Roman;
  font-style: italic;
  font-size: 17pt;

  opacity: 0;

  animation: ${fadeInFromBelowAnimation} 0.8s ease-out 0s 1 normal forwards;
`;

export const LutherButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  height: 15%;
  width: 80%;
`;

const LutherButtonContainer = styled.a<LutherStrokedContainerProps>`
  cursor: pointer;
  font-size: 13pt;
  line-height: 45px;
  margin: 0 0 3em;
  max-width: 160px;
  text-decoration: none;
  text-align: center;
  width: 100%;

  font-family: ${archivo.style.fontFamily};

  @media (min-width: 600px) {
    margin: 0 1em 2em;
  }

  box-sizing: inherit;
  transition-property: all;
  transition-duration: 0.6s;
  transition-timing-function: ease;

  position: relative;
  // align-self: center;
  // background: black;
  color: white;
  font-weight: 100;

  span {
    display: block;
    animation: ${strokedHideAnimation} ${(props) => props.delay} linear,
      ${strokedTextAnimation} 0.2s linear ${(props) => props.delay};
  }

  svg {
    height: 45px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    animation: ${strokedHideAnimation} ${(props) => props.delay} linear;
  }

  rect {
    fill: none;
    stroke: #fff;
    stroke-width: 2;
    stroke-dasharray: 422, 0;
    transition: all 0.35s linear;

    animation: ${strokedCreationAnimation} 0.4s linear ${(props) => props.delay};
  }

  &:hover {
    font-weight: 900;
    letter-spacing: 1px;
    text-decoration: none;

    rect {
      stroke-width: 5;
      stroke-dasharray: 15, 310;
      stroke-dashoffset: 48;
      transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
`;

type LutherButtonProps = {
  href: string;
  onClick?: () => void;
  delay?: string;
  children: React.ReactNode;
};

export const LutherButton = (props: LutherButtonProps) => (
  <LutherButtonContainer
    href={props.href}
    onClick={props.onClick}
    delay={props.delay || "0s"}
  >
    <svg>
      <rect x="0" y="0" fill="none" width="100%" height="100%" />
    </svg>
    <span>{props.children}</span>
  </LutherButtonContainer>
);

const aboutBackgroundAnimation = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`;

export const LutherAboutContainer = styled.div<LutherStrokedContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  position: absolute;
  width: 100%;
  height: 100%;
  top: 75%;

  opacity: 0;

  @media (max-width: 768px) {
    height: 150%;
  }

  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 31%,
    rgba(45, 4, 82, 1) 100%
  );

  animation: ${aboutBackgroundAnimation} 0.8s ease-out ${(props) => props.delay}
    1 normal forwards;
`;

type LutherQuestionAnswerContainerProps = {
  reversed?: boolean;
};

export const LutherQuestionAnswerContainer = styled.div<LutherQuestionAnswerContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.reversed ? "row-reverse" : "row")};
  justify-content: space-between;
  align-items: center;

  width: 80%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LutherAboutQuestion = styled.div`
  font-family: ${roboto_mono.style.fontFamily};
  font-weight: 900;
  font-size: 14pt;
  color: white;
  font-style: bold;

  @media (max-width: 768px) {
    margin: 10% 0%;
    text-align: center;
  }
`;

export const LutherAboutAnswer = styled.div`
  font-family: ${archivo.style.fontFamily};
  font-weight: 100;
  font-size: 12pt;
  color: white;
  max-width: 50%;
  white-space: pre-line;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

export const LutherAboutLink = styled.a`
  text-decoration: underline;
  color: white;
  font-weight: 200;
`;
