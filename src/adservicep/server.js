const express = require('express');
const PersonalizedAdsNetwork = require('./src/generator.js');
const app = express();
const logger = require('./src/logger');


app.get('/ads', async (req, res)  => {
    try {
        return res.send({ad: await PersonalizedAdsNetwork.getAd()});
    } catch (error) {
        logger.error(error);
        return res.status(404).send({});
    }
});

const PORT = 8081;
app.listen(PORT);
console.log(`Running on port ${PORT}`);