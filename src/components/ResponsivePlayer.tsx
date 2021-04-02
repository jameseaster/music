// React Imports
import React, { useState, useEffect } from "react";
import { useCurrentBreakpoint } from "../hooks";

// Dependency Imports
import ReactPlayer from "react-player";
type Video = {
  title: string;
  url: string;
  pdf: any;
};

type VideoPlayerProps = {
  videos: Video[];
  videoIndex?: number;
  toNextVideo?: () => void;
};

/**
 * ResponsivePlayer
 *
 * TODO: add details here
 */
export const ResponsivePlayer: React.FC<VideoPlayerProps> = ({
  videos,
  videoIndex,
}) => {
  const [currentVideo, setCurrentVideo] = useState<string>(
    videos[Number(videoIndex)].url
  );
  const { breakpoint } = useCurrentBreakpoint();

  // Widths for divider at the top of the Pages
  type Dimensions = {
    [key: string]: {
      height: string;
      width: string;
    };
  };
  const dimensions: Dimensions = {
    xs: { width: "400px", height: "225px" },
    sm: { width: "500px", height: "281px" },
    md: { width: "600px", height: "338px" },
    lg: { width: "700px", height: "394px" },
    xl: { width: "800px", height: "450px" },
    xxl: { width: "900px", height: "506px" },
  };

  useEffect(() => {
    setCurrentVideo(videos[Number(videoIndex)].url);
  }, [videoIndex, videos]);

  return (
    <ReactPlayer
      controls
      width={dimensions[breakpoint]?.width || "100%"}
      height={dimensions[breakpoint]?.height || "100%"}
      stopOnUnmount
      className="react-player"
      url={currentVideo}
    />
  );
};
