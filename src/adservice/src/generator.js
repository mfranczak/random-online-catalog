const faker = require('faker');

// const AD_TO_GENERATE_MAX = 10;
const AD_TO_GENERATE_MAX = 100000;

module.exports = {
    getAd: async function ()  {   
        const ads = [];

        for (i = 0; i < AD_TO_GENERATE_MAX; i++) {
            let sloganTemplate = slogans[getRandomInt(slogans.length-1)];    
            ads[i] = {slogan: sloganTemplate.replace("<replace>", faker.address.cityName)}
            console.log('Generated ad #' + i);
        }

        return ads[getRandomInt(ads.length - 1)];
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
