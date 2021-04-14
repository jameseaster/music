// Ant Design Imports
import { Typography } from "antd";
import clsx from "clsx";
// Constants
const { Title } = Typography;

type PictureTextProps = {
  classNames?: string;
  styles?: React.CSSProperties;
};

/**
 * PictureText
 *
 * A short paragraph about me which leads into my contact form
 */
export const PictureText: React.FC<PictureTextProps> = ({
  styles,
  classNames,
}) => {
  const textStyle = { fontWeight: 300 };

  return (
    <div className={clsx(classNames)} style={styles}>
      <Title level={4} style={textStyle}>
        Communicating through improvisation is unlike anything else.
      </Title>

      <Title level={4} style={textStyle}>
        I hope this site can share some of the music I've written, learned, and
        continue to study.
      </Title>
    </div>
  );
};
