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
    <Image width={"230px"} src="assets/images/3x4-gsg04.jpg" />
    <Image width={"230px"} src="assets/images/3x4-ochancey01.png" />
    <Image width={"230px"} src="assets/images/3x4-ochancey06.jpeg" />
  </Carousel>
);
