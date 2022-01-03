const faker = require('faker');
const timer = ms => new Promise( res => setTimeout(res, ms));

const WAITING_TIME_MAX = 250;
const WAITING_TIME_TIMEOUT = 100;

module.exports = {
    getAd: async function ()  {    
        const waitingTime = getRandomInt(WAITING_TIME_MAX);
        
        await timer(waitingTime); 
        
        if (waitingTime >=  WAITING_TIME_TIMEOUT) {
            throw "PersonalizedAdsNetwork failed with Timeout";
        }

        let sloganTemplate = slogans[getRandomInt(slogans.length-1)];
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
