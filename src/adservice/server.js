const express = require('express');
const LocalAds = require('./src/generator.js');
const app = express();

app.get('/ads', async (req, res)  => {
    try {
        console.log('Requesting ad.');
        return res.send({ad: await LocalAds.getAd()});
    } catch (error) {
        console.log(error);
        return res.status(404).send({});
    }
});

const PORT = 8082;
app.listen(PORT);
console.log(`Running on port ${PORT}`);