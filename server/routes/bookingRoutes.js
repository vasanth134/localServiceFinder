import express from "express";

const router = express.Router();

// ✅ Ensure the request method and URL match
router.post("/", async (req, res) => {
  try {
    const { userId, serviceId, date, time } = req.body;

    if (!userId || !serviceId || !date || !time) {
      return res.status(400).json({ error: "All fields are required" });
    }

    res.status(201).json({
      message: "Booking successful",
      booking: { userId, serviceId, date, time, status: "confirmed" },
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
