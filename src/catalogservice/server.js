const express = require('express');
const CatalogGenerator = require('./src/generator');
const Datasource = require('./src/datasource');

const app = express();
const LIMIT = 4;

app.get('/catalog/:type', async (req, res)  =>  {    
    const ds = Datasource.get(req.params['type']);

    return res.send({type: req.params.type, items: await ds.find(LIMIT)});
});

app.get('/init/:type', async (req, res) => {
    let limit = req.query['limit'] ?? LIMIT;


    const ds = Datasource.get(req.params['type']); 
    
    await ds.reset();

    while (limit--) {
        const item = CatalogGenerator.generate();    
        await ds.insert(item);    
    }

    return res.send();
})

const PORT = 8088;
app.listen(PORT);
console.log(`Running on port ${PORT}`);