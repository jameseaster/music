// Ant Design Imports
import { Image, Space } from "antd";
// Images
import gsg01 from "../assets/images/3x2-gsg01.jpg";
import gsg04 from "../assets/images/3x4-gsg04.jpg";
import gsg06 from "../assets/images/3x2-gsg06.jpg";
import ochancey01 from "../assets/images/3x4-ochancey01.jpg";
import ochancey04 from "../assets/images/3x4-ochancey04.jpg";
import ochancey05 from "../assets/images/3x4-ochancey05.jpg";
import ochancey06 from "../assets/images/3x4-ochancey06.jpg";

/**
 * ImageGroup
 *
 * TODO: add description
 */
export const ImageGroup: React.FC<{}> = () => (
  <Image.PreviewGroup>
    <Space size={0} wrap>
      <Image className="image" src={gsg04} />
      <Image className="image" src={ochancey01} />
      <Image className="image" src={ochancey06} />
      <Image className="image" src={ochancey04} />
      <Space size={-6} direction="vertical">
        <Image className="image image-stack-top" src={gsg01} />
        <Image className="image" src={gsg06} />
      </Space>
      <Image className="image" src={ochancey05} />
    </Space>
  </Image.PreviewGroup>
);
