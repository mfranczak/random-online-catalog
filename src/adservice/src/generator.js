const faker = require('faker');

const GENERATE_AD_VARIANTS_MAX = process.env.GENERATE_AD_VARIANTS_MAX ?? 100000;

module.exports = {
    getAd: async function ()  {   
        const ads = [];

        console.log("Requesting ad poolSize=" + GENERATE_AD_VARIANTS_MAX);

        for (i = 0; i < GENERATE_AD_VARIANTS_MAX; i++) {
            let sloganTemplate = slogans[getRandomInt(slogans.length-1)];    
            ads[i] = {slogan: sloganTemplate.replace("<replace>", faker.address.cityName)}
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
