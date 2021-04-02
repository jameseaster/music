// React Imports
import React from "react";

// Ant Design Imports
import { Image, Row, Col } from "antd";

// Images
import gsg01 from "../assets/images/3x2-gsg01.jpg";
import gsg04 from "../assets/images/3x4-gsg04.jpg";
import gsg06 from "../assets/images/3x2-gsg06.jpg";
import ochancey01 from "../assets/images/3x4-ochancey01.jpg";
import ochancey04 from "../assets/images/3x4-ochancey04.jpg";
import ochancey05 from "../assets/images/3x4-ochancey05.jpg";
import ochancey06 from "../assets/images/3x4-ochancey06.jpg";

/**
 * ImageGroup
 *
 * TODO: add description
 */
export const ImageGroup: React.FC<{}> = () => (
  <Image.PreviewGroup>
    <Row justify="center" style={{ marginBottom: "-6px", width: "100%" }}>
      <Col xs={24} lg={6}>
        <Image width={"230px"} src={gsg04} />
      </Col>

      <Col xs={24} lg={6}>
        <Image width={"230px"} src={ochancey01} />
      </Col>

      <Col xs={24} lg={6}>
        <Image width={"230px"} src={ochancey06} />
      </Col>
    </Row>
    <Row justify="center">
      <Col xs={24} lg={6}>
        <Image width={"230px"} src={ochancey04} />
      </Col>
      <Col xs={24} sm={6}>
        <Image width={"230px"} src={gsg01} />
        <Image style={{ marginTop: "-6px" }} width={"230px"} src={gsg06} />
      </Col>
      <Col xs={24} lg={6}>
        <Image width={"230px"} src={ochancey05} />
      </Col>
    </Row>
  </Image.PreviewGroup>
);
