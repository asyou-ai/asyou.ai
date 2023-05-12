import React from "react";

import {
  LutherContainer,
  LutherHero,
  LutherNameContainer,
  LutherSubtitleContainer,
  LutherButtonsContainer,
  LutherButton,
  LutherAboutContainer,
  LutherQuestionAnswerContainer,
  LutherAboutQuestion,
  LutherAboutAnswer,
  LutherAboutLink,
} from "@luther/styles/index.styles";

import { Header } from "@/components/Header";

const links = [
  {
    label: "docs",
    destination: "/docs",
  },
  {
    label: "package",
    destination: "https://www.npmjs.com/package/luther",
  },
  {
    label: "discord",
    destination: "/discord",
  },
];

const Luther = () => {
  const aboutRef = React.useRef<HTMLInputElement>(null);

  return (
    <LutherContainer>
      <Header links={links} />
      <LutherHero>
        <LutherNameContainer>luther</LutherNameContainer>
        <LutherSubtitleContainer>{`Writing documentation so you don't have to.`}</LutherSubtitleContainer>
        <LutherButtonsContainer>
          <LutherButton
            href="#about"
            onClick={() =>
              aboutRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            about
          </LutherButton>
          <LutherButton href="/start" delay="0.2s">
            get started
          </LutherButton>
          <LutherButton href="https://github.com/asyou-ai/luther" delay="0.4s">
            source
          </LutherButton>
        </LutherButtonsContainer>
      </LutherHero>
      <LutherAboutContainer delay="0.4s" ref={aboutRef}>
        <LutherQuestionAnswerContainer>
          <LutherAboutQuestion>What does luther do?</LutherAboutQuestion>
          <LutherAboutAnswer>
            {`luther is a library and cli tool that holistically documents codebases using state-of-the-art AI. 
            
            It takes pressure off of the developer and allows them to concentrate on the main task of writing software, while significantly decreasing onboarding time for contributors. On top of writing documentation, it can also check if existing documentation is out-of-date or incorrect.`}
          </LutherAboutAnswer>
        </LutherQuestionAnswerContainer>
        <LutherQuestionAnswerContainer reversed={true}>
          <LutherAboutQuestion>How does luther work?</LutherAboutQuestion>
          <LutherAboutAnswer>
            {`luther works by: 

            1. beginning at the code level, documenting the "what" and "how" of individual functions, recursing up to files and directories; 
            2. describing the purpose (the "why") of these elements, starting with a description of the application and recursing downwards;
            3. asking itself questions about the codebase ("how can I start quickly using this", "how can I build this from source", etc.)
            
            Read more in our `}
            <LutherAboutLink href="/docs">documentation</LutherAboutLink>
            {`, generated entirely by luther itself.`}
          </LutherAboutAnswer>
        </LutherQuestionAnswerContainer>
        <LutherQuestionAnswerContainer>
          <LutherAboutQuestion>
            Why is there a pull request to add luther to my project?
          </LutherAboutQuestion>
          <LutherAboutAnswer>
            {`That would be the work of luther's little lackey, or triple-L. triple-L is designed to actively find undocumented projects on GitHub above a certain number of stars and automatically write documentation and add luther to the project. 
            
            Feel free to reject this PR, but note that luther is a completely free and secure software that operates with existing documentation. If you hate triple-L, please help by contributing to improve luther or posting feedback on the `}
            <LutherAboutLink href="/discord">Discord server.</LutherAboutLink>
          </LutherAboutAnswer>
        </LutherQuestionAnswerContainer>
      </LutherAboutContainer>
    </LutherContainer>
  );
};

export default Luther;
