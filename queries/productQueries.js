const { promiseQuery } = require("../db/sql");

const getAllProductsQuery = async () => {
    const query = `SELECT * FROM shop_db.product_tbl`;
    const result = await promiseQuery(query);

    return result;
}

const postProductQuery = async (product) => {
    const query = `
        INSERT INTO shop_db.product_tbl (product_name, discrebetion, picture, price, in_stock) 
        VALUES ("${product.product_name}", "${product.discrebetion}","${product.picture}", ${product.price}, ${product.in_stock.data[0]});
    `;

    const result = await promiseQuery(query);

    return result; //true?
}

const updateProductQuery = async (id, product) => {
    const query = `
        UPDATE product_tbl
        SET 
            product_name = "${product.product_name}",
            discrebetion = "${product.discrebetion}",
            picture = "${product.picture}",
            price = ${product.price},
            in_stock = ${product.in_stock.data[0]}
        WHERE 
            product_id = ${id}; 
        `;

    const result = await promiseQuery(query);
    return true; //result
}

const deleteProductQuery = async (id) => {
    const query = `
        DELETE FROM product_tbl
        WHERE product_id = ${id};
        `;

    const result = await promiseQuery(query);
    return true;
}

module.exports = { getAllProductsQuery, postProductQuery, updateProductQuery, deleteProductQuery }  
