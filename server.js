const express = require('express');
const app = express();
const characterRoute = require('./Routes/characterRoute');

app.use(express.json());

// Rutas
app.use('/', characterRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});