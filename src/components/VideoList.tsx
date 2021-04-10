// Ant Design Imports
import { Space } from "antd";
// Components
import { VideoCard } from "../components/VideoCard";
import { VideoCategorySelector } from "../components/VideoCategorySelector";
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
  changeCategory: (to: "prev" | "next") => void;
  videoList: Video[];
  videoCategoryTitle: string;
};

/**
 * VideoList
 *
 * TODO: styles & documentation
 */
export const VideoList: React.FC<VideoListProps> = ({
  videoList,
  changeCategory,
  videoCategoryTitle,
}) => (
  <div
    className="video-list"
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <VideoCategorySelector
      changeCategory={changeCategory}
      videoCategoryTitle={videoCategoryTitle}
    />
    <div className="videos-container">
      <Space size={12} wrap>
        {videoList.map((v: Video) => (
          <VideoCard key={v.id} video={v} />
        ))}
      </Space>
    </div>
  </div>
);
