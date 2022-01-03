const faker = require('faker');
const md5 = require('md5');

module.exports = {
    find: function (limit)  {
        const items = [];
        for (i = 0; i < limit; i++) {
            let name = faker.address.cityName();

            items.push({
                id: md5(name),
                name: name,
                image: faker.image.unsplash.imageUrl(320, 240, 'city landscape', name),
                description: faker.lorem.words(24)
            });
        }
        return items;
    }
}
