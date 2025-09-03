// server.js
const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const path = require('path');
const cors = require('cors'); // tambahan

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // parsing body JSON
app.use(cors()); // izinkan CORS (aman kalau frontend dipisah)

// Layani file statis dari folder public
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/users', userRoutes);

// Rute root → kirim index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Bind ke semua interface supaya bisa diakses dari luar
app.listen(port, '0.0.0.0', () => {
  console.log(`Server berjalan di http://0.0.0.0:${port}`);
});
