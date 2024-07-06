const jwt = require("jsonwebtoken");

const { findUserQuery } = require("../db/userQueries");


const loginUser = async (email, password) => {

    const user = await findUserQuery(email, password);
    return user;

}

module.exports = { loginUser }