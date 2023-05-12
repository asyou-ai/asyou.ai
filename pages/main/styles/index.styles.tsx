import styled, { keyframes } from "styled-components";

import FlaskVector from "@main/assets/Flask.vector";

import { Archivo, Climate_Crisis } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"], weight: "variable" });
const climate_crisis = Climate_Crisis({ subsets: ["latin"] });

export const MainContainer = styled.div`
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

const fadeInFromBelowAnimation = keyframes`
	0% {
    	transform: translateY(50%);
		opacity: 0;
  	}
  	100% {
    	transform: translateY(0);
		opacity: 1;
  	}
`;

const fadeInFromAboveAnimation = keyframes`
	0% {
    	transform: translateY(-100%);
		opacity: 0;
  	}
  	100% {
    	transform: translateY(0);
		opacity: 1;
  	}
`;

export const MainNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 30%;
  left: 10%;

  color: white;
  font-family: ${climate_crisis.style.fontFamily};
  font-size: 50pt;

  animation: ${fadeInFromBelowAnimation} 0.5s ease-out;

  @media (max-width: 768px) {
    top: 10%;
  }
`;

const upperBubbleAnimation = keyframes`
	0% {
		transform: translateY(0);
  	}
  	30% {
		opacity: 1;
		transform: translateY(-13%);
  	}
	31% {
		opacity: 0;
		transform: translateY(-13%);
	}
	32% {
		transform: translateY(23%);
	}
	34% {
		opacity: 1;
	}
	35% {
		display: block;
		transform: translateY(23%);
	}
	100% {
		transform: translateY(0);
	}
`;

const lowerBubbleAnimation = keyframes`
	0% {
		transform: translateY(0);
  	}
  	60% {
		opacity: 1;
		transform: translateY(-22%);
  	}
	61% {
		opacity: 0;
		transform: translateY(-22%);
	}
	62% {
		transform: translateY(16%);
	}
	64% {
		opacity: 1;
	}
	65% {
		display: block;
		transform: translateY(16%);
	}
	100% {
		transform: translateY(0);
	}
`;

export const MainNameImageContainer = styled.div`
  width: 50pt;

  animation: ${fadeInFromAboveAnimation} 0.5s ease-out;

  #upper-bubble {
    animation: ${upperBubbleAnimation} 1.9s linear infinite 0.3s;
  }

  #lower-bubble {
    animation: ${lowerBubbleAnimation} 3.1s linear infinite 0.3s;
  }
`;

export const MainNameImage = () => (
  <MainNameImageContainer>
    <FlaskVector />
  </MainNameImageContainer>
);

export const MainSubtitleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  width: 50%;

  color: white;
  font-family: Times New Roman;
  font-style: italic;
  font-size: 17pt;

  opacity: 0;

  animation: ${fadeInFromBelowAnimation} 0.8s ease-out 0.5s 1 normal forwards;

  @media (max-width: 768px) {
    top: 25%;
    animation: ${fadeInFromBelowAnimation} 0.8s ease-out 0.2s 1 normal forwards;
  }
`;

export const MainButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 15%;
  height: 80%;
  width: 15%;

  @media (max-width: 768px) {
    width: 90%;
    top: 40%;
    transform: translateX(-50%);
    left: 50%;
    height: 70%;
  }
`;

const buttonCreationAnimation = keyframes`
	from {
		stroke-dasharray: 15, 310;
		stroke-dashoffset: 48;
	}
`;

const buttonHideAnimation = keyframes`
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

const buttonTextAnimation = keyframes`
	0% {
		transform: translateX(10%);
		opacity: 0;
  	}
  	100% {
		transform: translateX(0);
		opacity: 1;
  	}
`;

type MainButtonContainerProps = {
  delay: string;
};

const MainButtonContainer = styled.a<MainButtonContainerProps>`
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
    animation: ${buttonHideAnimation} ${(props) => props.delay} linear,
      ${buttonTextAnimation} 0.2s linear ${(props) => props.delay};
  }

  svg {
    height: 45px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    animation: ${buttonHideAnimation} ${(props) => props.delay} linear;
  }

  rect {
    fill: none;
    stroke: #fff;
    stroke-width: 2;
    stroke-dasharray: 422, 0;
    transition: all 0.35s linear;

    animation: ${buttonCreationAnimation} 0.4s linear ${(props) => props.delay};
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

type MainButtonProps = {
  href: string;
  delay?: string;
  children: React.ReactNode;
};

export const MainButton = (props: MainButtonProps) => (
  <MainButtonContainer href={props.href} delay={props.delay || "0s"}>
    <svg>
      <rect x="0" y="0" fill="none" width="100%" height="100%" />
    </svg>
    <span>{props.children}</span>
  </MainButtonContainer>
);
