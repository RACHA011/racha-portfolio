const mongoose = require("mongoose");

let MONGO_URI =
  "mongodb+srv://ratshalingwaadivhaho106:1a97ARmKBaMxFVQO@cluster0.3gzlz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 20000,
    });

    console.log("MongoDB connected...");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDb;
