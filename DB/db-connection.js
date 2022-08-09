const mysql = require('mysql2/promise');
const dbConfig=require('./db-config');

async function accessDatabase(sql,params){
    const connection = await mysql.createConnection(dbConfig);
    const [results] = await connection.execute(sql, params);
    console.log(results);
    return results;
}

module.exports={accessDatabase};