// React Imports
import React from "react";

// Ant Design Imports
import { Menu } from "antd";
import { MenuClickEventHandler } from "rc-menu/lib/interface";

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
};
/**
 * List
 *
 * TODO: add details here
 */
export const List: React.FC<ListProps> = ({
  list,
  handleSelect,
  selectedIndex,
}) => {
  return (
    <div className="list-container">
      <Menu
        style={{ width: 256, padding: 10, borderRadius: 8 }}
        mode="vertical"
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
