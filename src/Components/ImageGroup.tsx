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
  <Image.PreviewGroup>
    <Row justify="center" style={{ marginBottom: "-6px", width: "100%" }}>
      <Col xs={24} lg={6}>
        <Image width={"230px"} src="assets/3x4-gsg04.jpg" />
      </Col>

      <Col xs={24} lg={6}>
        <Image width={"230px"} src="assets/3x4-ochancey01.png" />
      </Col>

      <Col xs={24} lg={6}>
        <Image width={"230px"} src="assets/3x4-ochancey06.jpeg" />
      </Col>
    </Row>
    <Row justify="center">
      <Col xs={24} lg={6}>
        <Image width={"230px"} src="assets/3x4-ochancey04.jpg" />
      </Col>
      <Col xs={24} sm={6}>
        <Image width={"230px"} src="assets/3x2-gsg01.jpg" />
        <Image
          style={{ marginTop: "-6px" }}
          width={"230px"}
          src="assets/3x2-gsg06.jpg"
        />
      </Col>
      <Col xs={24} lg={6}>
        <Image width={"230px"} src="assets/3x4-ochancey05.jpg" />
      </Col>
    </Row>
  </Image.PreviewGroup>
);
