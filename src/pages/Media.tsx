// React Imports
import React, { useState } from "react";

// Ant Design Imports
import { Space, Button } from "antd";

// Components
import { AudioPlayer } from "../components/AudioPlayer";
import { VideoPlayer } from "../components/VideoPlayer";

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
  // Changes between audio and video players
  const [toggleMedia, setToggleMedia] = useState(true);
  const [videoAutoPlay, setVideoAutoPlay] = useState(false);

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
    setVideoAutoPlay(true);
  };

  return (
    <div className="pages-container">
      <div className="media-container">
        <div className="button-container">
          {/* TODO: This causes a spacing issue when playlist and player stack */}
          <Space size={30}>
            <Button
              type="text"
              style={{
                // TODO: remove active css
                border: toggleMedia
                  ? " 1px solid rgba(255, 255, 255, 0.85)"
                  : "none",
                marginBottom: "20px",
              }}
              onClick={() => {
                setToggleMedia(true);
                setVideoAutoPlay(false);
              }}
            >
              Audio
            </Button>
            <Button
              type="text"
              style={{
                border: toggleMedia
                  ? "none"
                  : " 1px solid rgba(255, 255, 255, 0.85)",
                marginBottom: "20px",
              }}
              onClick={() => {
                setToggleMedia(false);
                setVideoAutoPlay(false);
              }}
            >
              Video
            </Button>
          </Space>
        </div>
        {toggleMedia ? (
          <AudioPlayer
            tracks={tracks}
            trackIndex={trackIndex}
            toPrevTrack={toPrevTrack}
            toNextTrack={toNextTrack}
            handleSelect={handleAudioSelect}
          />
        ) : (
          <VideoPlayer
            className="video-player fade-in"
            videos={videos}
            playing={videoAutoPlay}
            videoIndex={videoIndex}
            selectedIndex={videoIndex}
            handleSelect={handleVideoSelect}
          />
        )}
      </div>
    </div>
  );
};
