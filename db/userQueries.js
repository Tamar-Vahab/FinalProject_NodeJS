const { promiseQuery } = require("./sql");


const findUserQuery = async (email, password) => {
    const query = ` SELECT * FROM todos.users  WHERE email = '${email}'  and password = '${password}'; `;
    const result = await promiseQuery(query);
    if (result.length == 0)
        return null;

    return result[0];  //רק משתמש אחד ממערך התוצאות
}

module.exports = { findUserQuery }  