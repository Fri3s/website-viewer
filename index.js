const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/getWebsiteContent', async (req, res) => {
  const { url } = req.body;

  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error fetching website content');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

