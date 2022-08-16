const express = require("express");

//configuring dotenv
const dotenv = require("dotenv");
dotenv.config();

//initializing app
const app = express();
//port number
const port = process.env.PORT || 5000;

//global middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome peeps" });
});

//port listener
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
