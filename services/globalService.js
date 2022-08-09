const { accessDatabase } = require('../DB/db-connection');

async function signUp(userDetails, tableName, callBack) {
    console.log(tableName);
    let sqlSentence = `SELECT * FROM ${tableName} WHERE email='${userDetails.email}' AND id='${userDetails.id}'`;
    let result = await accessDatabase(sqlSentence);
    console.log(result,'kk');
    if (!result[0]) {
        sqlSentence = `INSERT INTO customers VALUES('83522','4555454','dd','dddd','1234','2012-12-05','ym','kn','76','0556772272','eliisheva2272@','2012-12-05','2015-12-05',1)`;
        result = await accessDatabase(sqlSentence);
        console.log(result,'i');
    }
    callBack(result);
}


module.exports = { signUp };