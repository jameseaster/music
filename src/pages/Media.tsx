// React Imports
import { useState, useEffect } from "react";
// Components
import { VideoList } from "../components/VideoList";
import { AudioPlayer } from "../components/AudioPlayer";
import { MediaSelectorButton } from "../components/MediaSelectorButton";
// Assets
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
  // Local State
  const [trackIndex, setTrackIndex] = useState(0);
  const [media, setMedia] = useState<"audio" | "video">("audio");
  const [videoCategoryIndex, setVideoCategoryIndex] = useState(0);
  const [videos, setVideos] = useState(allVideos[videoCategoryIndex]);

  // Update videos when videoCategoryIndex changes
  useEffect(() => {
    setVideos(allVideos[videoCategoryIndex]);
  }, [videoCategoryIndex]);

  // Skip audio track forward or backward
  const skip = (to: "next" | "prev") => {
    return to === "next"
      ? trackIndex < tracks.length - 1
        ? setTrackIndex(trackIndex + 1)
        : setTrackIndex(0)
      : trackIndex - 1 >= 0
      ? setTrackIndex(trackIndex - 1)
      : setTrackIndex(tracks.length - 1);
  };

  // Select audio track from playlist
  const handleAudioSelect: MenuClickEventHandler = ({ key }) => {
    setTrackIndex(Number(key));
  };

  // Change video category
  const changeCategory = (to: "prev" | "next") => {
    return to === "next"
      ? videoCategoryIndex < allVideos.length - 1
        ? setVideoCategoryIndex(videoCategoryIndex + 1)
        : setVideoCategoryIndex(0)
      : videoCategoryIndex - 1 < 0
      ? setVideoCategoryIndex(allVideos.length - 1)
      : setVideoCategoryIndex(videoCategoryIndex - 1);
  };

  return (
    <div className="pages-container">
      <div className="media-container">
        <MediaSelectorButton media={media} setMedia={setMedia} />
        {media === "audio" && (
          <AudioPlayer
            skip={skip}
            tracks={tracks}
            trackIndex={trackIndex}
            handleSelect={handleAudioSelect}
          />
        )}
        {media === "video" && (
          <VideoList
            videoList={videos.info}
            changeCategory={changeCategory}
            videoCategoryTitle={videos.title}
          />
        )}
      </div>
    </div>
  );
};
