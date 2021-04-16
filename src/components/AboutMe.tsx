// Ant Design Imports
import { Typography, Image } from "antd";
import portrait from "../assets/images/3X4-portrait.jpg";
// Constants
const { Text } = Typography;

/**
 * AboutMe
 *
 * A short paragraph about me which leads into my contact form
 */
export const AboutMe: React.FC<{}> = () => {
  return (
    <>
      <div className="image-container">
        <Image
          src={portrait}
          width={300}
          alt={"portrait"}
          style={{ borderRadius: "8px" }}
        />
      </div>
      <div className="about-text-container">
        <Text strong>
          A little about me: I am a jazz guitarist currently living in Colorado
          Springs, CO. I've studied classical music and have a M.M. in Jazz
          Studies. Absorbing new music, writing for my trio, and performing
          might be some of my most favorite things, barring good coffee and
          great friends.
        </Text>
      </div>
    </>
  );
};
