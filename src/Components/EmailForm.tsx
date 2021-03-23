// React Imports
import React from "react";

import { Form, Input, Button } from "antd";

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

/**
 * EmailForm
 *
 * This component takes a name, email, and message and sends me an email
 * once the users submits the message
 */
export const EmailForm: React.FC<{}> = () => {
  // Log the contact form on submit
  const onFinish = (values: object) => console.log(values);

  return (
    <Form
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      style={{ width: "100%" }}
    >
      <Form.Item
        name={["user", "name"]}
        label="Name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[{ type: "email" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={["user", "message"]} label="Message">
        <Input.TextArea
          maxLength={250}
          showCount
          placeholder="Enter message here"
          allowClear
          autoSize={{ minRows: 4, maxRows: 4 }}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
