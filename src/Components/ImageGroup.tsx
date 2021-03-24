// React Imports
import React from "react";

// Ant Design Imports
import { Image, Row, Col } from "antd";

/**
 * ImageGroup
 *
 * TODO: add description
 */
export const ImageGroup: React.FC<{}> = () => (
  <div>
    <Image.PreviewGroup>
      <Row justify="center" align="middle">
        <Col span={6}>
          <Image width={"250px"} src="assets/3x4-gsg04.jpg" />
        </Col>

        <Col span={6}>
          <Image width={"250px"} src="assets/3x4-ochancey01.png" />
        </Col>

        <Col span={6}>
          <Image width={"250px"} src="assets/3x4-ochancey06.jpeg" />
        </Col>
      </Row>
      <Row justify="center" gutter={[0, 0]}>
        <Col span={6}>
          <Image width={"250px"} src="assets/3x4-ochancey04.jpg" />
        </Col>
        <Col span={6}>
          <Image width={"250px"} src="assets/3x2-gsg01.jpg" />
          <Image width={"250px"} src="assets/3x2-gsg06.jpg" />
        </Col>
        <Col span={6}>
          <Image width={"250px"} src="assets/3x4-ochancey05.jpg" />
        </Col>
      </Row>
    </Image.PreviewGroup>
  </div>
);
