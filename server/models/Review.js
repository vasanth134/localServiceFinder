import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  text: String,
  rating: Number,
  author: String,
  createdAt: { type: Date, default: Date.now }
});

const Review = mongoose.model("Review", reviewSchema);
export default Review;
