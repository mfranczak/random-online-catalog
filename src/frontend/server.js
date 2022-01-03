const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const AD_SERVICE_ADDR = process.env.AD_SERVICE_ADDR;
const CATALOG_SERVICE_ADDR = process.env.CATALOG_SERVICE_ADDR;
const CATALOG_TYPE = 'random'; // @todo from config

const app = express();

app.use("/", express.static(__dirname + "/public"));

app.get('/ads', async (req, res)  => {    
    try {
        console.log('Fetching ads from: ' + AD_SERVICE_ADDR);
        const response = await fetch(AD_SERVICE_ADDR);
        if (!response.ok) throw "Unexpected response: " + response.statusText;

        return res.send(await response.json());    
    } catch (error) {
        console.error(error);
        return res.status(500).send({});
    }
});

app.get('/catalog', async (req, res)  => {    
    try {
        console.log('Fetching catalog ' + CATALOG_TYPE + ' from: ' + CATALOG_SERVICE_ADDR);
        
        const response = await fetch(CATALOG_SERVICE_ADDR + '/catalog/' + CATALOG_TYPE);

        if (!response.ok) throw "Unexpected response: " + response.statusText;

        return res.send(await response.json());    
    } catch (error) {
        console.error(error);
        return res.status(500).send({});
    }
});


//Listen port
const PORT = 8080;
app.listen(PORT);
console.log(`Running on port ${PORT}`);
