import type { APIGatewayProxyHandler } from "aws-lambda";

const handler: APIGatewayProxyHandler = async (event) => {
  console.log(event.httpMethod, event.path);
  console.log(event.queryStringParameters);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Lambda! lol haha 2" }),
  };
};

console.log("Lambda function initialized");

module.exports.handler = handler;
