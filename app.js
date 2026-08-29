const express = require("express");
const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.static("dist"));

app.get("/health", (req, res) => {
  return res.status(400).send("broken");
});

const start = async () => {
  await app.listen(PORT);
  console.log(`server started on port ${PORT}`);
};

start();
