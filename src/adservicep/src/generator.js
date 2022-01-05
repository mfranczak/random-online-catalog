const faker = require('faker');
const md5 = require('md5');
const timer = ms => new Promise( res => setTimeout(res, ms));
const logger = require('./logger');

const WAITING_TIME_MIN = process.env.WAITING_TIME_MIN ? parseInt(process.env.WAITING_TIME_MIN) : 25;
const WAITING_TIME_MAX = process.env.WAITING_TIME_MAX ? parseInt(process.env.WAITING_TIME_MAX) : 250;
const WAITING_TIME_TIMEOUT = process.env.WAITING_TIME_TIMEOUT ? parseInt(process.env.WAITING_TIME_TIMEOUT) : 100;

module.exports = {
    getAd: async function ()  {    
        const waitingTime = WAITING_TIME_MIN + getRandomInt(WAITING_TIME_MAX - WAITING_TIME_MIN);
        
        logger.info("Waiting for PersonalizedAdsNetwork for " + WAITING_TIME_TIMEOUT + "ms");

        await timer(waitingTime); 
        
        if (waitingTime >=  WAITING_TIME_TIMEOUT) {
            throw "PersonalizedAdsNetwork failed after " + waitingTime + "ms";
        }

        let sloganTemplate = slogans[getRandomInt(slogans.length-1)];
        logger.debug("Personalized Ad id#" + md5(sloganTemplate) + " delivered");

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
