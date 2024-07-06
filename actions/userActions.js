const jwt = require("jsonwebtoken");

const { findUserQuery, getAllUsersQuery, postUserQuery } = require("../queries/userQueries");


const loginUser = async (email, password) => {
    const user = await findUserQuery(email, password);
    return user;
}

const getAllUsers = async () => {
    const users = await getAllUsersQuery();
    return users;
}

const registerUser = async (user) => {
    await postUserQuery(user);
    return true;
}
module.exports = { loginUser, getAllUsers, registerUser };