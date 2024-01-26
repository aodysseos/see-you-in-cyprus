import React from "react";
import { useEffect, useRef } from "react";

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

const VideoComponent: React.FC = () => {
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
    <div style={videoContainerStyles}>
      <video
        ref={videoRef}
        style={videoStyles}
        preload="metadata"
        loop
        playsInline
        autoPlay
        muted
        aria-hidden="false"
      >
        <source
          src="https://see-you-in-cyprus.s3.eu-west-1.amazonaws.com/waves.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
