"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handler = async (event) => {
    console.log(event.httpMethod, event.path);
    console.log(event.queryStringParameters);
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello from Lambda! lol" }),
    };
};
console.log("Lambda function initialized");
module.exports.handler = handler;
//# sourceMappingURL=index.js.map