import express from "express";
import Review from "../models/Review.js";

const router = express.Router();

// ➤ GET: Fetch reviews by userId (✅ Already Present)
router.get("/user/:id", async (req, res) => {
  try {
    const reviews = await Review.find({ userId: req.params.id }).populate("serviceId");
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ➤ GET: Fetch reviews by serviceId (✅ New - Required for service page)
router.get("/service/:id", async (req, res) => {
  try {
    const reviews = await Review.find({ serviceId: req.params.id });
    res.status(200).json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ➤ POST: Add a new review (✅ Required for users to submit reviews)
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

export default router;
