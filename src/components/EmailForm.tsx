import axios from "axios";
import { useState } from "react";
import { CONSTANTS } from "../utils/constants";
import { Form, Input, Button, Modal } from "antd";

// Constants
const validateMessages = {
  /* eslint-disable no-template-curly-in-string */
  required: "${label} is required",
  types: { email: "${label} is not a valid email" },
  /* eslint-disable no-template-curly-in-string */
};

interface ReqResult {
  error: boolean;
  message: string;
}

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
  const onFinish = async (values: any) => {
    // Prevent submitting another message
    setLoading(true);

    // Values from form
    const emailInfo = {
      from_name: values.name,
      reply_to: values.email,
      message: values.message,
    };

    try {
      // Send email to lambda function
      const result: ReqResult = await axios.post(
        CONSTANTS.lambdaURL,
        emailInfo
      );

      console.log({ result });
      // Handle errors
      if (result.error) throw result.error;
      successModal();
      form.resetFields();
    } catch (error) {
      console.log({ error });
      errorModal();
    } finally {
      // Clear loading
      setLoading(false);
    }
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
