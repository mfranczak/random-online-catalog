const faker = require('faker');
const md5 = require('md5');
const timer = ms => new Promise( res => setTimeout(res, ms));

const WAITING_TIME_MAX = process.env.WAITING_TIME_MAX ?? 250;
const WAITING_TIME_TIMEOUT = process.env.WAITING_TIME_TIMEOUT ?? 100;

module.exports = {
    getAd: async function ()  {    
        const waitingTime = getRandomInt(WAITING_TIME_MAX);
        console.log("INFO Waiting for PersonalizedAdsNetwork for " + WAITING_TIME_TIMEOUT + "ms");
        await timer(waitingTime); 
        
        if (waitingTime >=  WAITING_TIME_TIMEOUT) {
            throw "ERROR PersonalizedAdsNetwork failed with Timeout after " + waitingTime + "ms";
        }

        let sloganTemplate = slogans[getRandomInt(slogans.length-1)];
        
        console.log("DEBUG Personalized Ad id#" + md5(sloganTemplate) + " delivered");

        return {slogan: sloganTemplate.replace("<replace>", faker.address.cityName)};
    }
}

const slogans = [
    "<replace>, happiness begins now!",
    "What is better than <replace>?",
    "<replace> wanted.",
    "Think different. <replace>!",
    "A million holidays. One <replace>.",
    "<replace> is an investment in good health.",
    "<replace> rocks!",
];

const getRandomInt = function(max) {
    return Math.floor(Math.random() * max);
}
