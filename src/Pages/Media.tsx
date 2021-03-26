// React Imports
import React from "react";
import { AudioPlayer } from "../Components/AudioPlayer";
import photo from "../assets/images/1x1_plant.jpg";

/**
 * Media Page
 *
 * The Media page is the source of music on the website. This contains videos,
 * audio recordings, and pdf transcriptions
 */
export const Media: React.FC<{}> = () => {
  const tracks = [
    {
      title: "First Song",
      artist: "James Easter",
      audioSrc: "../assets/tracks/DayDreamer.mp3",
      image: photo,
      color: "dodgerblue",
    },
  ];

  return (
    <div className="pages-container">
      <h2>Media</h2>
      <AudioPlayer tracks={tracks} />
    </div>
  );
};
