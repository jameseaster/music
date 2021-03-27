// React Imports
import React from "react";

// Components
import { AudioPlayer } from "../Components/AudioPlayer";

// Tracks
import { tracks } from "../assets/tracks";

/**
 * Media Page
 *
 * The Media page is the source of music on the website. This contains videos,
 * audio recordings, and pdf transcriptions
 */
export const Media: React.FC<{}> = () => {
  return (
    <div className="pages-container">
      <AudioPlayer tracks={tracks} />
    </div>
  );
};
