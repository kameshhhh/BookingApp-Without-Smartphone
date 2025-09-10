// server_booking.js
// Standalone Express server for booking submissions
// Does NOT modify any original project files

const express = require("express");
const bodyParser = require("body-parser");
const bookingApi = require("./booking_api");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bookingApi);

const PORT = 3000; // Matches frontend fetch URL
app.listen(PORT, () => {
  console.log(`Booking API server running on http://localhost:${PORT}`);
});
