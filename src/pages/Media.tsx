// React Imports
import React, { useState } from "react";

// Components
import { List } from "../components/List";
import { AudioPlayer } from "../components/AudioPlayer";
import { ResponsivePlayer } from "../components/ResponsivePlayer";

// Tracks
import { tracks } from "../assets/tracks";
import { videos } from "../assets/videos";

// Types
import { MenuClickEventHandler } from "rc-menu/lib/interface";

/**
 * Media Page
 *
 * The Media page is the source of music on the website. This contains videos,
 * audio recordings, and pdf transcriptions
 */
export const Media: React.FC<{}> = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);

  // Handlers
  const toPrevTrack = () => {
    return trackIndex - 1 < 0
      ? setTrackIndex(tracks.length - 1)
      : setTrackIndex(trackIndex - 1);
  };

  const toNextTrack = () => {
    return trackIndex < tracks.length - 1
      ? setTrackIndex(trackIndex + 1)
      : setTrackIndex(0);
  };

  const handleAudioSelect: MenuClickEventHandler = ({ key }) => {
    setTrackIndex(Number(key));
    console.log(tracks[Number(key)]);
  };

  const handleVideoSelect: MenuClickEventHandler = ({ key }) => {
    setVideoIndex(Number(key));
  };

  return (
    <div className="pages-container">
      <div className="media-container">
        <AudioPlayer
          tracks={tracks}
          trackIndex={trackIndex}
          toPrevTrack={toPrevTrack}
          toNextTrack={toNextTrack}
        />
        <List
          list={tracks}
          selectedIndex={trackIndex}
          handleSelect={handleAudioSelect}
        />
        <ResponsivePlayer videos={videos} videoIndex={videoIndex} />
        <List
          list={videos}
          selectedIndex={videoIndex}
          handleSelect={handleVideoSelect}
        />
      </div>
    </div>
  );
};
