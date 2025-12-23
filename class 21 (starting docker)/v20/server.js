const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.json({
    message: "Hello from Node.js 20 service!",
  });
});

app.listen(PORT, () => {
  console.log(`v20 service listening on port ${PORT}`);
});
