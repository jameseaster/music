// React Imports
import React from "react";
import emailjs from "emailjs-com";
import axios from "axios";
import { Form, Input, Button } from "antd";

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
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
  // TODO: loading variable
  // TODO: add CAPTCHA support
  // TODO: add auto reply
  // TODO: confirmation of email sent
  // TODO: clear form

  const onFinish = (values: any) => {
    const templateParams = {
      from_name: values.name,
      reply_to: values.email,
      message: values.message,
    };

    axios("/.netlify/functions/sendEmail").then((res: any) => {
      const { service_id, template_id, user_id } = res.data;

      emailjs
        .send(service_id, template_id, templateParams, user_id)
        .then((result) => console.log(result.status))
        .catch((error) => console.log(error));
    });
  };

  return (
    <Form
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      style={{ width: "100%" }}
    >
      <Form.Item name={["name"]} label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={["email"]} label="Email" rules={[{ type: "email" }]}>
        <Input />
      </Form.Item>
      <Form.Item name={["message"]} label="Message">
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
