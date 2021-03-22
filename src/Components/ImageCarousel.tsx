// React Imports
import React from "react";

// Ant Design Imports
import { Carousel, Image } from "antd";

/**
 * ImageCarousel
 *
 * ...
 */
export const ImageCarousel: React.FC<{}> = () => (
  <Carousel autoplay dotPosition={"bottom"}>
    <Image width={"850px"} src="assets/couch-sessions-1.jpg" />
    <Image width={"400px"} src="assets/ochancey1.jpg" />
    <Image width={"900px"} src="assets/ochancey2.jpg" />
  </Carousel>
);
