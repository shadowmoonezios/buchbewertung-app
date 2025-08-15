const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// MongoDB Verbindung
mongoose.connect('mongodb://localhost:27017/buchbewertung', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Datenbank verbunden');
}).catch(err => console.error(err));

// Routes (Zukünftig hinzufügen)
app.get('/', (req, res) => {
  res.send('Willkommen zur Buchbewertung-App!');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});