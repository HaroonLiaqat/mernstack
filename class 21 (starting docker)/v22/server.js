const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.json({
    message: "Hello from Node.js 22 service!",
  });
});

app.listen(PORT, () => {
  console.log(`v22 service listening on port ${PORT}`);
});
