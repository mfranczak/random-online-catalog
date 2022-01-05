const express = require('express');
const LocalAds = require('./src/generator.js');
const logger = require('./src/logger.js');

const app = express();

app.get('/ads', async (req, res)  => {
    try {
        return res.send({ad: await LocalAds.getAd()});
    } catch (error) {
        logger.error(error);
        return res.status(404).send({});
    }
});

const PORT = 8082;
app.listen(PORT);
console.log(`Running AdService on port ${PORT}`);