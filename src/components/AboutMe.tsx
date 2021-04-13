// Dependency Imports
import clsx from "clsx";
// Ant Design Imports
import { Typography } from "antd";
// Constants
const { Text } = Typography;

type AboutMeProps = {
  classNames?: string;
  handleClick?: () => void;
  styles?: React.CSSProperties;
};

/**
 * AboutMe
 *
 * A short paragraph about me which leads into my contact form
 */
export const AboutMe: React.FC<AboutMeProps> = ({
  styles,
  classNames,
  handleClick,
}) => {
  return (
    <div className={clsx(classNames)} style={styles} onClick={handleClick}>
      <Text strong>
        A little about me, I am a jazz guitarist currently living in Colorado
        Springs, CO. I've studied classical music have an M.M. in Jazz Studies.
        Absorbing new music, writing for my trio, and performing might be some
        of my most favorite things, barring good coffee and great friends.
        <br />
        <br />I hope to release a lot of new music this year in 2021. Thanks for
        checking out my website.
      </Text>
    </div>
  );
};
