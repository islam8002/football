const express = require("express");
const axios = require("axios");
const app = express();

const API_KEY = "PUT_YOUR_API_KEY_HERE";

app.get("/live", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all",
      {
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
        }
      }
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "API Error" });
  }
});

app.listen(3000, () => {
  console.log("Server running");
});
