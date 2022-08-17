const express = require("express");
const mongoose = require("mongoose");

//importing routes
const cattleRoutes = require("./routes/cattle");
//configuring dotenv
const dotenv = require("dotenv");
dotenv.config();

//initializing app
const app = express();
//port number
const port = process.env.PORT || 5000;

//middleware for processing json data
app.use(express.json());

//global middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //port listener
    app.listen(port, () => {
      console.log(`Connecting to database & listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

//routes
app.use("/api/cattle", cattleRoutes);
