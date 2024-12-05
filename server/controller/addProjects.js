const fs = require("fs");
const path = require("path");
const Image = require("../model/ProjectSchema"); // Your Mongoose model

const addImages = async (req, res) => {
  const images = [
    {
      photo: "./assets/images/projects/postme.png",
      name: "post-it-web-app",
      description:
        "A simple Spring Boot web application that allows users to post and manage content.",
      link: "https://post-it-web-app.onrender.com",
    },
    {
      photo: "./assets/images/projects/api.png",
      name: "RachaDevAPI",
      description:
        "RachaDevAPI is a secure RESTful API built with Spring Boot for user account management and authentication.",
      link: "https://restdev-01.onrender.com/swagger-ui/index.html#",
    },
    {
      photo: "./assets/images/projects/api.png",
      name: "Todolistapi",
      description:
        "The To-Do List API is a Spring Boot-based application that allows users to manage their tasks efficiently.",
      link: "https://todolistapi-acpu.onrender.com/swagger-ui/index.html#",
    },
    {
      photo: "./assets/images/projects/mantistemplate.png",
      name: "Photo Vault",
      description:
        "A front-end application using React to interact with the RachaDevAPI.",
      link: "https://photo-vault.vercel.app",
    },
  ];

  try {
    // Transform the images into the required format
    const transformedImages = images.map((image) => {
      const imagePath = path.resolve(image.photo); // Resolve the full path to the image
      const imageBuffer = fs.readFileSync(imagePath); // Read the image as Buffer
      const contentType = `image/${path.extname(image.photo).slice(1)}`; // Get content type based on extension

      return {
        name: image.name,
        description: image.description,
        photo: {
          data: imageBuffer,
          contentType: contentType,
        },
        link: image.link,
      };
    });

    // Insert transformed documents into MongoDB
    await Image.insertMany(transformedImages);

    res.status(200).json({ message: "Images saved successfully!" });
  } catch (error) {
    console.error("Error saving images:", error.message);
    res
      .status(500)
      .json({ message: "Error saving images", error: error.message });
  }
};

module.exports = addImages;
