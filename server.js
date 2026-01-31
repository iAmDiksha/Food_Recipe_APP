// server.js
import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // <-- load .env

const app = express();
app.use(cors());

// Proxy endpoint for Edamam API
app.get("/api/recipes", async (req, res) => {
  const { q } = req.query;

  const app_id = process.env.EDAMAM_APP_ID;
  const app_key = process.env.EDAMAM_APP_KEY;

  if (!app_id || !app_key) {
    return res.status(500).json({ error: "Missing Edamam credentials" });
  }

  try {
    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2`,
      {
        params: {
          type: "public",
          q,
          app_id,
          app_key,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Edamam API error:", error?.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch from Edamam" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));