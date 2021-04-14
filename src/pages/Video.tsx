// React Imports
import { useState, useEffect } from "react";
// Dependency Imports
import clsx from "clsx";
// Ant Design Imports
import { Tabs } from "antd";
// Components
import { VideoList } from "../components/VideoList";
// Assets
import { allVideos } from "../assets/videos";
// Hooks
import { useCurrentBreakpoint } from "../hooks";
// Constants
const { TabPane } = Tabs;
// Types
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

  // Hooks
  const { breakpoint: bp } = useCurrentBreakpoint();

  // Check Video Type
  const isOfVidepType = (key: string): key is VideoType =>
    ["Live", "Transcriptions", "Studio"].includes(key);

  // Update videos when videoType changes
  useEffect(() => {
    const idx = allVideos.map((v) => v.title).indexOf(videoType);
    if (idx > -1) setVideos(allVideos[idx]);
  }, [videoType]);

  return (
    <div className="pages-container">
      <div className={clsx("video-container", { [`${bp}-height`]: bp.length })}>
        <Tabs
          centered
          tabBarGutter={6}
          onChange={(key: string) =>
            isOfVidepType(key) ? setVideoType(key) : null
          }
        >
          <TabPane tab="Transcriptions" key="Transcriptions">
            <VideoList videoList={videos.info} />
          </TabPane>
          <TabPane tab="Live" key="Live">
            <VideoList videoList={videos.info} />
          </TabPane>
          <TabPane tab="Studio" key="Studio">
            <VideoList videoList={videos.info} />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};
