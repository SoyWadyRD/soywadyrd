const express = require('express');
const cors = require('cors');
const path = require('path');
const liveRoutes = require('./routes/liveRoutes');
const statusRoutes = require("./routes/statusRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Servir frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Rutas
app.use('/live', liveRoutes);
app.use('/api', statusRoutes);

// Página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor Live corriendo en ${PORT}`));

