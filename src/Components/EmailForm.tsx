// React Imports
import React, { useState } from "react";
import emailjs from "emailjs-com";
import axios from "axios";
import { Form, Input, Button, Modal } from "antd";

/* eslint-disable no-template-curly-in-string */
// TODO:
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
  // Local State
  const [loading, setLoading] = useState(false);
  // Hooks
  const [form] = Form.useForm();

  // Handle form submition
  const onFinish = (values: any) => {
    // Prevent submitting another message
    setLoading(true);

    // Values from form
    const templateParams = {
      from_name: values.name,
      reply_to: values.email,
      message: values.message,
    };

    // Get credentials
    axios("/.netlify/functions/sendEmail").then((res: any) => {
      const { service_id, template_id, user_id } = res.data;

      // Send email
      emailjs
        .send(service_id, template_id, templateParams, user_id)
        .then((result) => {
          successModal();
          setLoading(false);
          form.resetFields();
          console.log(result.status);
        })
        .catch((error) => {
          errorModal();
          setLoading(false);
          console.log(error.status);
        });
    });
  };

  // Success confirmation
  function successModal() {
    Modal.success({ content: "Your messagae was sent!" });
  }
  // Error confirmation
  function errorModal() {
    Modal.error({ content: "Message failed to send." });
  }

  return (
    <Form
      form={form}
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish}
      style={{ width: "100%" }}
      validateMessages={validateMessages}
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
        <Button loading={loading} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
