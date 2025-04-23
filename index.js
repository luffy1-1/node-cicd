const express = require("express");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Another example route
app.post("/data", (req, res) => {
  const received = req.body;
  res.json({ message: "Data received", data: received });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
