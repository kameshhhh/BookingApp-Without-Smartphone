// booking_api.js
// Simulated API endpoint for booking submissions
// Does NOT modify any original project files

const express = require("express");
const router = express.Router();

// Simulate receiving a booking submission
router.post("/submit-booking", (req, res) => {
  const { name, email, booking_date, vehicle } = req.body;
  // Simulate storing to DB (replace with actual DB logic)
  console.log("Received booking:", { name, email, booking_date, vehicle });
  // Respond with success
  res.json({ success: true, received: { name, email, booking_date, vehicle } });
});

module.exports = router;
