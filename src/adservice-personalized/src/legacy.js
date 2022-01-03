const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const AD_SERVICE_ADDR = process.env.AD_SERVICE_ADDR;

module.exports = {
    getAd: async function ()  {    
        try {
            console.log('Fetching ads from: ' + AD_SERVICE_ADDR);
            var start = new Date().getTime();

            const response = await fetch(AD_SERVICE_ADDR + "/ads");
            if (!response.ok) throw "Unexpected response: " + response.statusText;
            const data = await response.json();
            if (!data.ad) {
                throw 'Ad was not returned';
            }

            console.log('Legacy response after ' + (new Date().getTime() - start) + 'ms');
            return data.ad;
        } catch (error) {
            console.error(error);
            return undefined;
        }        
    }
};