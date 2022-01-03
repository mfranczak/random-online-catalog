const express = require('express');
const generator = require('./src/generator.js');
const app = express();

app.get('/ads', async (req, res)  => {
    try {
        console.log('Requesting personalized ad.');
        return res.send({ad: await generator.getAd()});    
    } catch (error) {
        console.log(error);
        return res.status(404).send({});
    }
});

const PORT = 8081;
app.listen(PORT);
console.log(`Running on port ${PORT}`);