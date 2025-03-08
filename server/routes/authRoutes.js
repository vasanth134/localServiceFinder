import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Google Login Route
router.post("/google-login", async (req, res) => {
  const { googleId, name, email, profilePic } = req.body;

  try {
    let user = await User.findOne({ googleId });

    if (!user) {
      user = new User({ googleId, name, email, profilePic });
      await user.save();
    }

    res.status(200).json({ message: "Login Successful", user });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
