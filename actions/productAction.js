const jwt = require("jsonwebtoken");

const { getAllProductsQuery, postProductQuery, updateProductQuery, deleteProductQuery } = require("../queries/productQueries");


const getAllProducts = async () => {
    const products = await getAllProductsQuery();
    return products;
}

const addProduct = async (product) => {
    const result = await postProductQuery(product);
    return result;
}

const updateProduct = async (id, product) => {
    const result = await updateProductQuery(id, product);
    return result;
}

const deleteProduct = async (id) => {
    const result = await deleteProductQuery(id);
    return result;
}

module.exports = { getAllProducts, addProduct, updateProduct, deleteProduct };