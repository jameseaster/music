// React Imports
import React, { useState, useEffect } from "react";

// Ant Design Imports
import { Space, Button } from "antd";

// Components
import { AudioPlayer } from "../components/AudioPlayer";
import { VideoPlayer } from "../components/VideoPlayer";

// Tracks
import { tracks } from "../assets/tracks";
import { allVideos } from "../assets/videos";

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
  const [videoCategoryIndex, setVideoCategoryIndex] = useState(0);
  const [videos, setVideos] = useState(allVideos[videoCategoryIndex]);

  // Changes between audio and video players
  const [toggleMedia, setToggleMedia] = useState(true);
  const [videoAutoPlay, setVideoAutoPlay] = useState(false);

  // Handlers
  const skip = (type: "audio" | "video", to: "next" | "prev") => {
    const index = type === "audio" ? trackIndex : videoIndex;
    const list = type === "audio" ? tracks : videos.info;
    const setFn = type === "audio" ? setTrackIndex : setVideoIndex;

    // Stop auto play when clicking through videos
    if (type === "video") {
      setVideoAutoPlay(false);
    }

    // Skip forward or backward
    if (to === "next") {
      return index < list.length - 1 ? setFn(index + 1) : setFn(0);
    } else {
      return index - 1 >= 0 ? setFn(index - 1) : setFn(list.length - 1);
    }
  };

  // Change video category
  const changeCategory = (to: "prev" | "next") => {
    setVideoAutoPlay(false);

    if (to === "next") {
      return videoCategoryIndex < allVideos.length - 1
        ? setVideoCategoryIndex(videoCategoryIndex + 1)
        : setVideoCategoryIndex(0);
    } else {
      return videoCategoryIndex - 1 < 0
        ? setVideoCategoryIndex(allVideos.length - 1)
        : setVideoCategoryIndex(videoCategoryIndex - 1);
    }
  };

  // Select audio track from playlist
  const handleAudioSelect: MenuClickEventHandler = ({ key }) => {
    setTrackIndex(Number(key));
  };

  // Select video from playlist
  const handleVideoSelect: MenuClickEventHandler = ({ key }) => {
    setVideoIndex(Number(key));
    setVideoAutoPlay(false);
  };

  // Plays the video when the video player is in "light" mode
  const videoPlayPause = () => {
    let element: HTMLElement = document.getElementsByClassName(
      "react-player__preview"
    )[0] as HTMLElement;

    if (element) {
      element.click();
      element.click();
    } else {
      setVideoAutoPlay((playing) => !playing);
    }
  };

  // Update videos when videoCategoryIndex changes
  useEffect(() => {
    setVideos(allVideos[videoCategoryIndex]);
    setVideoIndex(0);
  }, [videoCategoryIndex]);

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
            videos={videos.info}
            playing={videoAutoPlay}
            videoIndex={videoIndex}
            selectedIndex={videoIndex}
            setPlaying={setVideoAutoPlay}
            videoPlayPause={videoPlayPause}
            changeCategory={changeCategory}
            handleSelect={handleVideoSelect}
            videoCategoryTitle={videos.title}
          />
        )}
      </div>
    </div>
  );
};
