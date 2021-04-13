// React Imports
import { useState } from "react";
// Dependency Imports
import axios from "axios";
import emailjs from "emailjs-com";
// Ant Design Imports
import { Form, Input, Button, Modal } from "antd";

// Constants
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required",
  types: { email: "${label} is not a valid email" },
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
      <Form.Item
        label="Email"
        name={["email"]}
        rules={[{ required: true }, { type: "email" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Message"
        name={["message"]}
        rules={[{ required: true }]}
      >
        <Input.TextArea
          showCount
          allowClear
          maxLength={250}
          placeholder="Enter message here"
          autoSize={{ minRows: 7, maxRows: 7 }}
        />
      </Form.Item>
      <Form.Item style={{ margin: 0 }}>
        <Button loading={loading} type="primary" htmlType="submit">
          Send
        </Button>
      </Form.Item>
    </Form>
  );
};
