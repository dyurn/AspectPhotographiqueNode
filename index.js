const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurer le moteur de templates EJS
app.set("view engine", "ejs");
app.use(express.static("public"));

// Routes
app.get('/', (req, res) => {
  res.render('gallery');
});

app.get('/boutique', (req, res) => {
  res.render('shop');
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
