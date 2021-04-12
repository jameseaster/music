// Ant Design Imports
import { Space } from "antd";
// Components
import { VideoCard } from "../components/VideoCard";
// Types
type Video = {
  pdf?: any;
  id: string;
  url: string;
  title: string;
  image: string;
  pdf_title?: string;
  sub_title?: string;
};
type VideoListProps = {
  videoList: Video[];
};

/**
 * VideoList
 *
 * TODO: styles & documentation
 */
export const VideoList: React.FC<VideoListProps> = ({ videoList }) => (
  <div
    className="video-list"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <div className="videos-container">
      <Space size={6} wrap>
        {videoList.map((v: Video) => (
          <VideoCard key={v.id} video={v} />
        ))}
      </Space>
    </div>
  </div>
);
