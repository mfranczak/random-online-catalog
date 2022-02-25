const sql = require('mssql');

module.exports = {
    find: async function(limit) {
        try {
            await connect();
            const result = await sql.query('select top ' + limit + ' * from Items');
            return result['recordset'];     
        } catch (err) {
            console.log(err);
        }
    },
    reset: async function() {
        try {        
            await connect();
            await sql.query`IF EXISTS (SELECT * FROM sysobjects WHERE name='Items' and xtype='U') DROP TABLE Items`;                
            await sql.query`IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Items' and xtype='U') CREATE TABLE Items (id varchar(255), name varchar(255), image varchar(255), description varchar(255))`;
        } catch (err) {
            console.log(err);
        }
    },
    insert: async function(item) {
        try {        
            await connect();

            const request = new sql.Request();

            request.input('id', item.id)
            request.input('name', item.name)
            request.input('description', item.description)
            request.input('image', item.image)

            await request.query("INSERT INTO [Items] VALUES (@id, @name, @image, @description)");

        } catch (err) {
            console.log(err);
        }
    }
}

const connect = async function() {
    return sql.connect(process.env['SQL_ADDR']);
}
