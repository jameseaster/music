// Ant Design Imports
import { Menu, Typography } from "antd";
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
  handleSelect: MenuClickEventHandler;
};
const { Text } = Typography;

/**
 * Playlist
 *
 * TODO: add details here
 */
export const Playlist: React.FC<ListProps> = ({
  list,
  className,
  handleSelect,
  height = 400,
  selectedIndex,
  noPadding = false,
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
    <div style={{ width: "200px" }}>
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
        <Menu.ItemGroup
          key="House Plants"
          title={
            <Text style={{ color: "white", fontWeight: 700 }}>
              House Plants
            </Text>
          }
        >
          {list.map((item: Track | Video, idx: number) => (
            <Menu.Item key={idx}>{`${idx + 1}. ${item.title}`}</Menu.Item>
          ))}
        </Menu.ItemGroup>
      </Menu>
    </div>
  );
};
