import express from "express";
import Service from "../models/Service.js";

const router = express.Router();

// Add a new service
router.post("/", async (req, res) => {
  try {
    console.log("Request Body:", req.body); // Debugging log

    const { name, description, provider, price } = req.body;

    // Check if all required fields are provided
    if (!name || !description || !provider || !price) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newService = new Service({ name, description, provider, price });

    await newService.save();
    res.status(201).json({ message: "Service added successfully", service: newService });

  } catch (error) {
    console.error("Error adding service:", error);
    res.status(500).json({ error: "Failed to add service", details: error.message });
  }
});

export default router;
