// Ant Design Imports
import { Typography } from "antd";
// Ant Design Icons
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
// Constants
const { Title } = Typography;
// Types
type VCSProps = {
  videoCategoryTitle: string;
  changeCategory: (to: "prev" | "next") => void;
};

/**
 * VideoCategorySelector
 *
 * Changes the video categories under the Video button in the Media tab
 */
export const VideoCategorySelector: React.FC<VCSProps> = ({
  changeCategory,
  videoCategoryTitle,
}) => (
  <div className="vcs fade-in">
    <div className="vcs-buttons grow">
      <LeftOutlined onClick={() => changeCategory("prev")} />
    </div>
    <div className="vcs-buttons">
      <Title level={4}>{videoCategoryTitle}</Title>
    </div>
    <div className="vcs-buttons grow">
      <RightOutlined onClick={() => changeCategory("next")} />
    </div>
  </div>
);
