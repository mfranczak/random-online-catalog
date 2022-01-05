const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const logger = require('./src/logger');
const AdNetwork = require('./src/ads');

const CATALOG_SERVICE_ADDR = process.env.CATALOG_SERVICE_ADDR;
const CATALOG_TYPE = 'random'; // @todo from config

const app = express();

app.use("/", express.static(__dirname + "/public"));

app.get('/ads', async (req, res)  => {    
    try {
        return res.send(await AdNetwork.fetchAd());    
    } catch (error) {
        logger.error(error);
        logger.fatal("AdNetwork failed to deliver an Ad.");
        return res.status(500).send({});
    }
});

app.get('/catalog', async (req, res)  => {    
    try {        
        const response = await fetch(CATALOG_SERVICE_ADDR + '/catalog/' + CATALOG_TYPE);

        if (!response.ok) throw "Unexpected response: " + response.statusText;

        return res.send(await response.json());    
    } catch (error) {
        return res.status(500).send({});
    }
});

//Listen port
const PORT = 8080;
app.listen(PORT);
console.log(`Running Frontend on port ${PORT}`);
