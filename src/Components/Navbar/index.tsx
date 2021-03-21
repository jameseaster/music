import React from "react";
import "./index.less";
import { Link } from "react-router-dom";
import { Divider, Row, Col } from "antd";

export const Navbar: React.FC<{}> = () => (
  <div className="container">
    <Divider orientation="left">James Easter</Divider>
    <Row gutter={16}>
      <Col span={6}>
        <Link to="/">Home</Link>
      </Col>
      <Col span={6}>
        <Link to="/media">Media</Link>
      </Col>
      <Col span={6}>
        <Link to="/bio">Bio</Link>
      </Col>
      <Col span={6}>
        <Link to="/contact">Contact</Link>
      </Col>
    </Row>
  </div>
);
