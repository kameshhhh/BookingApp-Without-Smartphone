// server_missed_call.js
// Standalone Express server for missed call/SMS simulation
// Does NOT modify any original project files

const express = require("express");
const bodyParser = require("body-parser");
const missedCallApi = require("./missed_call_api");

const app = express();
app.use(bodyParser.json());
app.use(missedCallApi);

const PORT = 4000; // Use a different port to avoid conflicts
app.listen(PORT, () => {
  console.log(`Missed Call/SMS API server running on http://localhost:${PORT}`);
});
