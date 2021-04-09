// Ant Design Imports
import { Menu, Button } from "antd";
// Ant Design Icons
import { UpOutlined, LeftOutlined } from "@ant-design/icons";
// Hooks
import { useCurrentBreakpoint } from "../hooks";
// Types
import { MenuClickEventHandler } from "rc-menu/lib/interface";
type Track = {
  title: string;
  image: string;
  color: string;
  artist: string;
  audioSrc: string;
};
type Video = {
  pdf?: any;
  id: string;
  url: string;
  title: string;
  image: string;
  pdf_title?: string;
  sub_title?: string;
};
type ListProps = {
  height?: number;
  className?: string;
  noPadding?: boolean;
  selectedIndex?: number;
  list: Track[] | Video[];
  responsiveHeight?: boolean;
  togglePlaylistView: () => void;
  handleSelect: MenuClickEventHandler;
};
/**
 * List
 *
 * TODO: add details here
 */
export const List: React.FC<ListProps> = ({
  list,
  className,
  handleSelect,
  height = 400,
  selectedIndex,
  noPadding = false,
  togglePlaylistView,
  responsiveHeight = false,
}) => {
  const { breakpoint } = useCurrentBreakpoint();

  // Heights to coorespond with video player
  type HeightValues = {
    [key: string]: string;
  };
  const heightValues: HeightValues = {
    xs: "225px",
    sm: "281px",
    md: "338px",
    lg: "394px",
    xl: "450px",
    xxl: "506px",
  };

  return (
    <div
      style={{
        minWidth: 200,
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", top: "1%", left: "85%", zIndex: 3 }}>
        <Button size="small" type="text" onClick={togglePlaylistView}>
          {breakpoint === "xs" || breakpoint === "sm" ? (
            <UpOutlined style={{ fontSize: "12px" }} />
          ) : (
            <LeftOutlined style={{ fontSize: "12px" }} />
          )}
        </Button>
      </div>
      <Menu
        className={className}
        style={{
          borderRadius: 8,
          overflowX: "hidden",
          padding: noPadding ? 0 : 10,
          height: responsiveHeight ? heightValues[breakpoint] : height,
        }}
        onSelect={handleSelect}
        defaultSelectedKeys={["0"]}
        selectedKeys={[String(selectedIndex)]}
      >
        {list.map((item: Track | Video, idx: number) => (
          <Menu.Item key={idx}>{`${idx + 1}. ${item.title}`}</Menu.Item>
        ))}
      </Menu>
    </div>
  );
};
