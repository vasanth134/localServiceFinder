import express from "express";
import Notification from "../models/Notification.js";

const router = express.Router();

router.get("/user/:id", async (req, res) => {
  try {
    const notifications = await Notification.find({ userId: req.params.id });
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
