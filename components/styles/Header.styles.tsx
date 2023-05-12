import styled from "styled-components";

import { Archivo } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"], weight: "variable" });

export const HeaderContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 10%;
  top: 0px;
  left: 0px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderIcon = styled.a`
  display: block;

  height: 80%;
  width: auto;
  margin: 0% 3%;
`;

export const HeaderItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  width: 33%;

  @media (max-width: 768px) {
    width: 66%;
  }
`;

export const HeaderItem = styled.a`
  display: block;

  height: 100%;

  font-family: ${archivo.style.fontFamily};
  font-weight: 100;
  text-decoration: none;
  color: white;
`;
