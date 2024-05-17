const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3003;

const options = {
  method: 'GET',
  url: 'https://airbnb19.p.rapidapi.com/api/v1/getLanguages',
  headers: {
    'X-RapidAPI-Key': '1fed32ccc5mshddd366284721629p1ae8a2jsn789774f6dd86',
    'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
  }
};

app.get('/', async (req, res) => {
  try {
    const response = await axios.request(options);
    const languages = response.data.data;
    const html = generateLanguageCards(languages);
    res.send(html);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

function generateLanguageCards(languages) {
  let html = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Languages</title><style>.card {margin: 20px; padding: 20px; border: 1px solid #ccc; border-radius: 5px;}</style></head><body>';
  languages.forEach(language => {
    html += `<div class="card">
      <h2>${language.title}</h2>
      <p>ID: ${language.id}</p>
    </div>`;
  });
  html += '</body></html>';
  return html;
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;