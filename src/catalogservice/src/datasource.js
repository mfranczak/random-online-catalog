

module.exports = {
    get(type) {
        switch (type){
            case 'sql':
                const sql = require("./azure/sql");
                return sql;
            default:
                console.log(type + ' datasource is not supported using default datasource=generator')
        }
        
        return require('./generator');            
    }
}

function can(obj, methodName)
{
    return ((typeof obj[methodName]) == "function");
}