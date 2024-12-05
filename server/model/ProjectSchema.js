const mongoose = require("mongoose");

// Define the project schema
const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Project name is required"], // Correct configuration for `required`
  },
  description: {
    type: String,
    required: [true, "Project description is required"],
  },
  photo: {
    data: { type: Buffer, required: true },
    contentType: { type: String, required: true },
  },
  link: {
    type: String,
    required: [true, "Project link is required"],
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
