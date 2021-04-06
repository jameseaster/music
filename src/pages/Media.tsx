// React Imports
import React, { useState } from "react";

// Ant Design Imports
import { Space, Button } from "antd";

// Components
import { AudioPlayer } from "../components/AudioPlayer";
import { VideoPlayer } from "../components/VideoPlayer";

// Tracks
import { tracks } from "../assets/tracks";
import { transcriptions /*live, studio */ } from "../assets/videos";

// Types
import { MenuClickEventHandler } from "rc-menu/lib/interface";

// const videoCategories = {
//   0: { title: "Transcription", list: transcriptions },
//   1: { title: "Live", list: live },
//   2: { title: "Studio", list: studio },
// };

/**
 * Media Page
 *
 * The Media page is the source of music on the website. This contains videos,
 * audio recordings, and pdf transcriptions
 */
export const Media: React.FC<{}> = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);

  // const [videos, setVideos] = useState(transcriptions);
  const videos = transcriptions;

  // Changes between audio and video players
  const [toggleMedia, setToggleMedia] = useState(true);
  const [videoAutoPlay, setVideoAutoPlay] = useState(false);

  // Handlers
  const skip = (type: "audio" | "video", to: "next" | "prev") => {
    const index = type === "audio" ? trackIndex : videoIndex;
    const list = type === "audio" ? tracks : videos;
    const setFn = type === "audio" ? setTrackIndex : setVideoIndex;

    if (to === "next") {
      return index < list.length - 1 ? setFn(index + 1) : setFn(0);
    } else {
      return index - 1 >= 0 ? setFn(index - 1) : setFn(list.length - 1);
    }
  };

  // const changeCategory = (to: "prev" | "next") => {
  //   if (to === "next") {
  //     return index < list.length - 1 ? setFn(index + 1) : setFn(0);
  //   } else {
  //     return index - 1 < 0 ? setFn(list.length - 1) : setFn(trackIndex - 1);
  //   }
  // };
  const handleAudioSelect: MenuClickEventHandler = ({ key }) => {
    setTrackIndex(Number(key));
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
            skip={skip}
            tracks={tracks}
            trackIndex={trackIndex}
            handleSelect={handleAudioSelect}
          />
        ) : (
          <VideoPlayer
            className="video-player fade-in"
            skip={skip}
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
