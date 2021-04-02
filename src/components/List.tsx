// React Imports
import React from "react";

// Ant Design Imports
import { Menu } from "antd";
import { MenuClickEventHandler } from "rc-menu/lib/interface";

// Hooks
import { useCurrentBreakpoint } from "../hooks";

type Track = {
  title: string;
  artist: string;
  audioSrc: string;
  image: string;
  color: string;
};
type Video = {
  title: string;
  url: string;
  pdf: any;
};

type ListProps = {
  list: Track[] | Video[];
  selectedIndex?: number;
  handleSelect: MenuClickEventHandler;
  height?: number;
  responsiveHeight?: boolean;
};
/**
 * List
 *
 * TODO: add details here
 */
export const List: React.FC<ListProps> = ({
  list,
  handleSelect,
  height = 400,
  selectedIndex,
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
    <Menu
      style={{
        minWidth: 256,
        padding: 10,
        borderRadius: 8,
        height: responsiveHeight ? heightValues[breakpoint] : height,
      }}
      mode="inline"
      onSelect={handleSelect}
      defaultSelectedKeys={["0"]}
      selectedKeys={[String(selectedIndex)]}
    >
      {list.map((item: Track | Video, idx: number) => (
        <Menu.Item key={idx}>{`${idx + 1}. ${item.title}`}</Menu.Item>
      ))}
    </Menu>
  );
};
