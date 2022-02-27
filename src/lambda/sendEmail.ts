import { Handler, APIGatewayEvent } from "aws-lambda";
import axios from "axios";
require("dotenv").config();

const response = {
  200: {
    statusCode: 200,
    body: JSON.stringify({ error: false, message: "Email sent!" }),
  },
  404: {
    statusCode: 404,
    body: JSON.stringify({ error: true, message: "Email failed to send." }),
  },
  405: {
    statusCode: 405,
    body: JSON.stringify({ error: true, message: "Method not allowed." }),
  },
};

const handler: Handler = async (event: APIGatewayEvent) => {
  try {
    if (event.httpMethod !== "POST") return response["405"];
    const reqBody = {
      user_id: process.env.EMAILJS_USER_ID,
      accessToken: process.env.ACCESS_TOKEN,
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      template_params: JSON.parse(event.body || "{}"),
    };
    await axios.post(process.env.EMAIL_API_URL || "", reqBody);
    return response["200"];
  } catch (error) {
    return response["404"];
  }
};

export { handler };
