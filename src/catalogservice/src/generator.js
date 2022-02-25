const faker = require('faker');
const md5 = require('md5');

module.exports = {
    find: function (limit)  {
        const items = [];
        for (i = 0; i < limit; i++) {    
            items.push(
                this.generate()
            );
        }
        return items;
    },
    generate() {
        let name = faker.address.cityName();
        return {
            id: md5(name),
            name: name,
            image: faker.image.unsplash.imageUrl(320, 240, 'city landscape', name),
            description: faker.lorem.words(24)
        }
    }
}
