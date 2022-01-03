const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const AD_SERVICE_ADDR = process.env.AD_SERVICE_ADDR;

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

//Listen port
const PORT = 8080;
app.listen(PORT);
console.log(`Running on port ${PORT}`);
