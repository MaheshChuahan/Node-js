import express from "express";
import dotenv from "dotenv";

dotenv.config(); // Loads .env file contents into process.env

const app = express();

const PORT = 5000;


app.get("/", (req, res) => {
  res.send("Render Node.js Server Running Successfully!");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
 
});
