const express = require('express');
const PersonalizedAdsNetwork = require('./src/generator.js');
const LegacyAdsNetwork = require('./src/legacy.js');
const app = express();

app.get('/ads', async (req, res)  => {
    try {
        console.log('Requesting personalized ad.');
        return res.send({ad: await PersonalizedAdsNetwork.getAd()});
    } catch (error) {
        console.error(error);
        console.log("Fallback to LegacyAdsNetwork.")

        const ad = await LegacyAdsNetwork.getAd();
        if (ad) {
            return res.send({ad: ad});    
        }
        
        console.error("LegacyAdsNetwork failed.");
        return res.status(404).send({});
    }
});

const PORT = 8081;
app.listen(PORT);
console.log(`Running on port ${PORT}`);