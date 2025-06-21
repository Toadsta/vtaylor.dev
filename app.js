const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
// console.log(process.env.PORT);
const port = process.env.PORT;
const address = process.env.ADDRESS;

app.use(express.static(path.join(__dirname, 'templates')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'vicos.html'));
});

app.listen(port, address, () => {
    console.log(`Server is running on http://${address}:${port}`);
});

module.exports = app;