const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({path: './config/config.env'});
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/v1/stores', (req, res) => {
    res.send('Hello');
})

app.listen(PORT, () => console.log(`Server properly running on ${PORT}`));