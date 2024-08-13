const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db");
async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://localhost/mydatabase");
    console.log("Azzuwa ka Gaand Connected to Munnwa ka lund sucessfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

connectToDatabase();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
