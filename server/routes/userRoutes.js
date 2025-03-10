import express from "express";
import User from "../models/User.js";
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("MongoDB Login Error:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;
