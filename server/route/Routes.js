const express = require("express");
const project = require("../model/ProjectSchema");
const upload = require("../middleware/upload");
//const addProject = require('../controller/addProjects');

const router = express.Router();

// Route to get all projects
router.get("/getprojects", async (req, res) => {
  try {
    const projects = await project.find();
    // Transform the photo data for each project
    const transformedProjects = projects.map((project) => ({
      ...project.toObject(),
      photo: project.photo
        ? `data:${
            project.photo.contentType
          };base64,${project.photo.data.toString("base64")}`
        : null, // Handle cases where photo might be missing
    }));

    res.status(200).json(transformedProjects);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching projects", error: error.message });
  }
});

// Route to upload a project
router.post("/add-project", upload.single("photo"), async (req, res) => {
  try {
    const { name, description, link } = req.body;
    const { file } = req;

    if (!file) {
      return res.status(400).json({ message: "No image file uploaded" });
    }

    // Create a new project object
    const newProject = new Project({
      name: name,
      description: description,
      link: link,
      photo: {
        data: file.buffer,
        contentType: file.mimetype,
      },
    });

    // Save the project to the database
    await newProject.save();

    res.status(200).json({ message: "Project saved successfully!" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error saving project", error: error.message });
  }
});

// Simple route to check if the server is functional
router.get("/status", (req, res) => {
  res.status(200).send("Server is running and functional!");
});

// add projects
// router.post('/addimages', addProject, (res) => {
//     res.status(200).send({ message: 'Projects added successfully!' });
// });

module.exports = router;
