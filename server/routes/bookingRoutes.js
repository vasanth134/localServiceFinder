import express from "express";
import mongoose from "mongoose";
import Booking from "../models/Booking.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { userId, serviceId, date, time } = req.body;

    if (!userId || !serviceId || !date || !time) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newBooking = new Booking({
      userId: new mongoose.Types.ObjectId(userId),
      serviceId: new mongoose.Types.ObjectId(serviceId),
      date,
      time,
      status: "confirmed",
    });

    await newBooking.save();

    res.status(201).json({
      message: "Booking successful",
      booking: newBooking,
    });
  } catch (error) {
    console.error("Booking error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
