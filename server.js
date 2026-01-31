// server.js
import express from 'express';
import axios from 'axios';
import cors from 'cors';
const app = express();
app.use(cors());

// Proxy endpoint for Edamam API
app.get('/api/recipes', async (req, res) => {
  const { q } = req.query;
  const app_id = '64f9fd89';
  const app_key = '06a13507716534be3bcf8db92c8d9b31';
  try {
    const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${encodeURIComponent(q)}&app_id=${app_id}&app_key=${app_key}`);
    res.json(response.data);
  } catch (error) {
    console.error('Edamam API error:', error?.response?.data || error.message || error);
    res.status(500).json({ error: 'Failed to fetch from Edamam', details: error?.response?.data || error.message || error });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
