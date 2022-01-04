const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const logger = require('./logger');

const AD_SERVICE_ADDR = process.env.AD_SERVICE_ADDR;

module.exports = {
    getAd: async function ()  {    
        try {
            logger.debug('Fetching ads from: ' + AD_SERVICE_ADDR);

            var start = new Date().getTime();

            const response = await fetch(AD_SERVICE_ADDR + "/ads");
            if (!response.ok) throw "Unexpected response: " + response.statusText;
            const data = await response.json();
            if (!data.ad) {
                throw 'Ad was not returned';
            }

            logger.debug('Legacy response after ' + (new Date().getTime() - start) + 'ms');

            return data.ad;
        } catch (error) {
            logger.error(error);
            return undefined;
        }        
    }
};