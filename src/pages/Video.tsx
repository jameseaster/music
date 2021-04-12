// React Imports
import { useState, useEffect } from "react";
// Components
import { VideoList } from "../components/VideoList";
import { VideoSelectionButtons } from "../components/VideoSelectionButtons";
// Assets
import { allVideos } from "../assets/videos";

type VideoType = "Live" | "Transcriptions" | "Studio";

/**
 * Video Page
 *
 * TODO:
 */
export const Video: React.FC<{}> = () => {
  // Local State
  const [videos, setVideos] = useState(allVideos[0]);
  const [videoType, setVideoType] = useState<VideoType>("Transcriptions");

  // Update videos when videoType changes
  useEffect(() => {
    const idx = allVideos.map((v) => v.title).indexOf(videoType);
    if (idx > -1) setVideos(allVideos[idx]);
  }, [videoType]);

  return (
    <div className="pages-container">
      <div className="audio-container">
        <VideoSelectionButtons
          videoType={videoType}
          setVideoType={setVideoType}
        />
        <VideoList videoList={videos.info} />
      </div>
    </div>
  );
};
