import React from "react";

import {
  HeaderContainer,
  HeaderIcon,
  HeaderItems,
  HeaderItem,
} from "./styles/Header.styles";

import Flask from "@main/assets/Flask.vector";

type Link = {
  label: string;
  destination: string;
};

type HeaderProps = {
  links: Link[];
};

export const Header = (props: HeaderProps) => (
  <HeaderContainer>
    <HeaderIcon href="/">
      <Flask />
    </HeaderIcon>
    <HeaderItems>
      {props.links.map((link, i) => (
        <HeaderItem key={i} href={link.destination}>
          {link.label}
        </HeaderItem>
      ))}
    </HeaderItems>
  </HeaderContainer>
);
