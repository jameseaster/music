import { Handler, Context, Callback, APIGatewayEvent } from "aws-lambda";
require("dotenv").config();

interface HelloResponse {
  statusCode: number;
  body: string;
}

const handler: Handler = (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback
) => {
  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify({
      service_id: process.env.EMAILJS_SERVICE_ID,
      user_id: process.env.EMAILJS_USER_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
    }),
  };

  callback(undefined, response);
};

export { handler };
