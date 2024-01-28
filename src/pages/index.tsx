import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import styled from "styled-components";

import VideoComponent from "../components/VideoComponent";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const headingContainerStyles = {
  color: "#fff",
  width: "100%",
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -40%)",
  textAlign: "center",
};

const HeadingDiv = styled.h1`
  font-family: "Great Vibes";
  font-weight: 300;
  font-size: 3.5em;
  font-style: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 0.05em;
  // Media query for screens smaller than 768px
  @media (max-width: 768px) {
    font-weight: 100;
    font-size: 3em;
  }
`;

const SubHeadingDiv = styled.h2`
  font-family: "Great Vibes";
  font-weight: 300;
  font-size: 1.5em;
  font-style: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 0.05em;
  // Media query for screens smaller than 768px
  @media (max-width: 768px) {
    font-weight: 200;
    font-size: 1.5em;
  }
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <div style={headingContainerStyles}>
        <HeadingDiv>Save the date</HeadingDiv>
        <SubHeadingDiv>13/09/2025</SubHeadingDiv>
      </div>
      <VideoComponent />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <div>
      <title>Save the date</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
        rel="stylesheet"
      ></link>
    </div>
  );
};
