import type { APIGatewayProxyHandler } from "aws-lambda";
import { getAllDomains } from "./get-all-domains.js";

export const handler: APIGatewayProxyHandler = async (event) => {
  console.log(event.httpMethod, event.path);
  console.log(event.queryStringParameters);

  return {
    statusCode: 200,
    body: JSON.stringify(await getAllDomains()),
  };
};

console.log("Lambda function initialized");
