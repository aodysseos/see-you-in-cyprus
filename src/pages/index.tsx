import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import VideoComponent from "../components/VideoComponent";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const headingStyles = {
  fontFamily: "Great Vibes",
  fontWeight: 300,
  fontSize: "3em",
  fontStyle: "normal",
  color: "#fff",
  textAlign: "center",
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -30%)",
};

const subheadingStyles = {
  fontFamily: "Great Vibes",
  fontWeight: 300,
  fontSize: "1em",
  fontStyle: "normal",
  color: "#fff",
  textAlign: "center",
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -40%)",
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Save the date</h1>
      <h2 style={subheadingStyles}>13/02/2025</h2>
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
