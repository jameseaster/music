// React Imports
import React from "react";

// Ant Design Imports
import { Menu } from "antd";
import { MenuClickEventHandler } from "rc-menu/lib/interface";

// Hooks
import { useCurrentBreakpoint } from "../hooks";

// Types
type Track = {
  title: string;
  image: string;
  color: string;
  artist: string;
  audioSrc: string;
};
type Video = {
  pdf: any;
  url: string;
  title: string;
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
      className={className}
      style={{
        minWidth: 256,
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
  );
};
