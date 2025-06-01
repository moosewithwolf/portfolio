const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../portfolio-frontend/dist')));
// serve static images from public/images
app.use('/images', express.static(path.join(__dirname, '../portfolio-frontend/public/images')));

app.get('/health', (_, res) => {
  res.status(200).send('OK');
});

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../portfolio-frontend/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
