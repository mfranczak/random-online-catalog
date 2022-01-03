const faker = require('faker');
const md5 = require('md5');
// const timer = ms => new Promise( res => setTimeout(res, ms));

// const WAITING_TIME_MAX = 250;
// const WAITING_TIME_TIMEOUT = 100;

module.exports = {
    find: function (limit)  {
        const items = [];
        for (i = 0; i < limit; i++) {
            let name = faker.address.cityName();

            items.push({
                id: md5(name),
                name: name,
                image: faker.image.city(640, 480),
                description: faker.lorem.words(24)
            });
        }
        return items;

        // const waitingTime = getRandomInt(WAITING_TIME_MAX);
        // console.log("Waiting for PersonalizedAdsNetwork for " + WAITING_TIME_TIMEOUT + "ms");
        // await timer(waitingTime); 
        
        // if (waitingTime >=  WAITING_TIME_TIMEOUT) {
        //     throw "PersonalizedAdsNetwork failed with Timeout after " + waitingTime + "ms";
        // }

        // let sloganTemplate = slogans[getRandomInt(slogans.length-1)];
        
        // console.log("Personalized Ad id#" + md5(sloganTemplate) + " delivered");

        // return {slogan: sloganTemplate.replace("<replace>", faker.address.cityName)};
    }
}

// const slogans = [
//     "<replace>, happiness begins now!",
//     "What is better than <replace>?",
//     "<replace> wanted.",
//     "Think different. <replace>!",
//     "A million holidays. One <replace>.",
//     "<replace> is an investment in good health.",
//     "<replace> rocks!",
// ];

// const getRandomInt = function(max) {
//     return Math.floor(Math.random() * max);
// }
