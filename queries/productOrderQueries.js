const { promiseQuery } = require("../db/sql");

const postProductOrderQuery = async (orderId, productOrder) => {
    const query = `
        INSERT INTO shop_db.product_order_tbl (product_id, order_id, amunt)
        VALUES (${productOrder.product_id}, ${orderId},${productOrder.amunt});
    `;
    const result = await promiseQuery(query);

    return result; //true?
}


const deleteProductOrdersByOrderIdQuery = async (orderId) => {
    const query = ` DELETE FROM product_order_tbl
                    WHERE order_id = ${orderId};`
   const result = await promiseQuery(query);
   return result; 
}



module.exports = { postProductOrderQuery, deleteProductOrdersByOrderIdQuery}  