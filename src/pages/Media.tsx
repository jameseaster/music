// React Imports
import React, { useState } from "react";

// Ant Design Imports
import { Space } from "antd";

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
        <div style={{ marginBottom: "40px" }}>
          <Space wrap size={[0, 40]}>
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
          </Space>
        </div>
        <div style={{ marginBottom: "40px" }}>
          <Space wrap size={[0, 40]}>
            <List
              list={videos}
              responsiveHeight={true}
              selectedIndex={videoIndex}
              handleSelect={handleVideoSelect}
            />
            <ResponsivePlayer videos={videos} videoIndex={videoIndex} />
          </Space>
        </div>
      </div>
    </div>
  );
};
