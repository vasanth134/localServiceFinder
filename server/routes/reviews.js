import express from "express";
import Review from "../models/Review.js";

const router = express.Router();

// ➤ POST: Add a review
router.post("/", async (req, res) => {
  try {
    const { userId, serviceId, text, rating } = req.body;

    if (!userId || !serviceId || !text || !rating) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newReview = new Review({ userId, serviceId, text, rating });
    await newReview.save();

    res.status(201).json({ message: "Review added successfully", review: newReview });
  } catch (error) {
    console.error("Error adding review:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ➤ GET: Fetch all reviews for a specific service
router.get("/:serviceId", async (req, res) => {
  try {
    const { serviceId } = req.params;
    const reviews = await Review.find({ serviceId });

    res.status(200).json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
