const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hey there, I am Node.js running with Express!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
