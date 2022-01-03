const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const ADS_SERVICE = process.env.ADS_SERVICE;

const app = express();

app.use("/", express.static(__dirname + "/public"));

app.get('/ads', async (req, res)  => {
    try {
        const response = await fetch(ADS_SERVICE);
        if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);

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
