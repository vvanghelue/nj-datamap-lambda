const express = require("express");
const { handler } = require("./index");

const app = express();
const port = 3323;

app.use(async (req, res) => {
  res.header("Content-Type", "application/json");

  const emulatedEvent = {
    httpMethod: req.method,
    path: req.path,
    queryStringParameters: req.query,
    requestContext: {
      http: {
        method: req.method,
        path: req.path,
      },
    },
  };
  res.send((await handler(emulatedEvent)).body);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
