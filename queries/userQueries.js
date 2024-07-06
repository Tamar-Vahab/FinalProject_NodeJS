const { promiseQuery } = require("../db/sql");


const findUserQuery = async (email, password) => {
    const query = ` SELECT * FROM shop_db.user_tbl  WHERE email = '${email}'  and password = '${password}'; `;
    const result = await promiseQuery(query);
    if (result.length == 0)
        return null;

    return result[0];  //רק משתמש אחד ממערך התוצאות
}

const postUserQuery = async (user) => {
    const query = `
    INSERT INTO shop_db.user_tbl 
    (user_name, email, password, street, city, house_number, phone, status) 
    VALUES 
    ('${user.user_name}', '${user.email}', '${user.password}', '${user.street}', '${user.city}', '${user.house_number}', '${user.phone}', '${user.status}')
    `;

    const result = await promiseQuery(query);
    if (result.length == 0)
        return null;

    return result[0];  //רק משתמש אחד ממערך התוצאות
}

const getAllUsersQuery = async () => {
    const query = `SELECT * FROM shop_db.user_tbl`;
    const result = await promiseQuery(query);
    if (result.length == 0)
        return null;

    return result;
}

module.exports = { findUserQuery, getAllUsersQuery, postUserQuery}  