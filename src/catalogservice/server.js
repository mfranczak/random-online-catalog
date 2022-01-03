const express = require('express');
const CatalogGenerator = require('./src/generator');

const app = express();
const LIMIT = 25;

app.get('/catalog/:type', (req, res)  => {    
    return res.send({type: req.params.type, items: CatalogGenerator.find(LIMIT)});
});

const PORT = 8088;
app.listen(PORT);
console.log(`Running on port ${PORT}`);