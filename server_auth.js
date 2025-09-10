// server_auth.js
// Simple Express server for authentication API (hackathon prototype)

const express = require("express");
const cors = require("cors");
const authApi = require("./auth_api");

const app = express();
app.use(cors());
app.use(authApi);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Auth API server running on http://localhost:${PORT}`);
});
