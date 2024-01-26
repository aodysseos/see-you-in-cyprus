import * as React from "react";
import { useEffect, useRef } from "react";
import type { HeadFC, PageProps } from "gatsby";

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

const videoContainerStyles: React.CSSProperties = {
  position: "fixed",
  right: 0,
  bottom: 0,
  minWidth: "100%",
  minHeight: "100%",
  overflow: "hidden",
  zIndex: -1 /* Ensure video stays in the background */,
};

const videoStyles: React.CSSProperties = {
  /* Make video to cover the whole screen */
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "100%",
  minHeight: "100%",
};

const IndexPage: React.FC<PageProps> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // videoRef.current.playbackRate = 0.1; // Play video at half speed
      const videoElement = videoRef.current;
      if (videoElement) {
        const handleVideoLoad = () => {
          // Autoplay the video when it's loaded
          videoElement.play().catch((error) => {
            console.error("Video play failed", error);
          });
        };

        // Add event listener for when the video metadata is loaded
        videoElement.addEventListener("loadedmetadata", handleVideoLoad);

        // Clean up event listener
        return () => {
          videoElement.removeEventListener("loadedmetadata", handleVideoLoad);
        };
      }
    }
  }, []);

  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Save the date</h1>
      <h2 style={subheadingStyles}>13/02/2025</h2>
      <div style={videoContainerStyles}>
        <video ref={videoRef} style={videoStyles} loop muted>
          <source
            src="https://see-you-in-cyprus.s3.eu-west-1.amazonaws.com/waves.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
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
