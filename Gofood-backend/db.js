const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://kishanf19s:Kishan5540D@cluster0.4b3b9st.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const mongoDB = () => {
  mongoose.connect("mongoURI", () => {
    console.log("connected to database");
  });
};
module.exports = mongoDB;
