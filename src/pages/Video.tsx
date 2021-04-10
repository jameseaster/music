// React Imports
import { useState, useEffect } from "react";
// Components
import { VideoList } from "../components/VideoList";
// import { MediaSelectorButton } from "../components/MediaSelectorButton";
// Assets
import { allVideos } from "../assets/videos";

/**
 * Video Page
 *
 * TODO:
 */
export const Video: React.FC<{}> = () => {
  // Local State
  // const [media, setMedia] = useState<"audio" | "video">("audio");
  const [videoCategoryIndex, setVideoCategoryIndex] = useState(0);
  const [videos, setVideos] = useState(allVideos[videoCategoryIndex]);

  // Update videos when videoCategoryIndex changes
  useEffect(() => {
    setVideos(allVideos[videoCategoryIndex]);
  }, [videoCategoryIndex]);

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
        {/* <MediaSelectorButton media={media} setMedia={setMedia} /> */}
        <VideoList
          videoList={videos.info}
          changeCategory={changeCategory}
          videoCategoryTitle={videos.title}
        />
      </div>
    </div>
  );
};
