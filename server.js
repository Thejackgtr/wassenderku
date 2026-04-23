const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./server/routes/auth');
const contactRoutes = require('./server/routes/contacts');
const messageRoutes = require('./server/routes/messages');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/messages', messageRoutes);

app.get('/', (req, res) => {
    res.send('WASenderKu API Running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server jalan di port ${PORT}`);
});
