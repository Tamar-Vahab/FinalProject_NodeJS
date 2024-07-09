const { promiseQuery } = require("../db/sql");

const getOrderWithProductBYidQuery = async (id) => {
    debugger
    const ordersQuery = `SELECT *
                        FROM shop_db.order_tbl
                        WHERE order_id = ${id}`  
    const order = await promiseQuery(ordersQuery)[0];  

    const productsQuery = ` SELECT po.*, p.product_name, p.description
                            FROM product_order_tbl po  JOIN product_tbl p 
                            ON po.product_id = p.product_id
                            WHERE po.order_id = ${id}`;

    const orderProducts = await promiseQuery(productsQuery);
    order.products = orderProducts;
    return order
}

const getOrdersBtUserIdQuery = async (userid) => {
    const query = `SELECT *
                    FROM shop_db.order_tbl
                    WHERE user_id = ${userid}`
    const result = await promiseQuery(query);
    return result
}

const getCartQuery = async (userid) => {
    const query = `SELECT *
                    FROM shop_db.order_tbl
                    WHERE user_id = ${userid} AND is_clossed = 0`
    const result = await promiseQuery(query);
    return result
}

const postOrderQuery = async (order) => {
    const query = `
        INSERT INTO shop_db.order_tbl (date, due_date, user_id, address, phone, is_clossed)
        VALUES ("${order.date}", "${order.due_date}",${order.user_id}, "${order.address}", "${order.phone}", ${order.is_clossed.data[0]});
    `;
    const result = await promiseQuery(query);

    return result;
}

const pustOrderQuery = async (id, order) => {
    console.log('pustOrderQuery', order.due_date, order.address);
    const query = ` UPDATE shop_db.order_tbl SET 
                                            due_date = "${order.due_date}", 
                                            address =  "${order.address}", 
                    WHERE order_id = ${id} and due_date >= CURDATE();`;

    const result = await promiseQuery(query);
    return result; 
}

const deleteOrderQuery = async (id) => {
    const query1 = `DELETE PO
                    FROM product_order_tbl PO JOIN order_tbl O
                    ON  PO.order_id = O.order_id
                    WHERE O.order_id = ${id} AND O.due_date <= CURDATE()`
    const result1 = await promiseQuery(query1);
    const query2 = `DELETE FROM shop_db.order_tbl WHERE order_id = ${id} AND due_date <= CURDATE()`
    const result2 = await promiseQuery(query2);
    return result2
}

const countOfOrderByUserQuery = (userid) = () =>{
    const query = `SELECT COUNT(*) as count
                    FROM shop_db.order_tbl
                    WHERE user_id = ${userid};`
    const result = promiseQuery(query)
    return result
} 

const tatalPaymentQuery = (userid) = () => {
    const query = ` SELECT sum(P.price * PO.amunt)
                    FROM (product_tbl P JOIN product_order_tbl PO
                    ON P.product_id = po.product_id) JOIN order_tbl  O ON O.order_id = PO.order_id
                    WHERE O.user_id = ${userid};`
    return promiseQuery(query)[0]
}

const avgPaymentQuery = (userid) = () => {
    const query = ` SELECT AVG(P.price * PO.amunt)
                    FROM (product_tbl P JOIN product_order_tbl PO
                    ON P.product_id = po.product_id) JOIN order_tbl  O ON O.order_id = PO.order_id
                    WHERE O.user_id = ${userid}`
    return promiseQuery(query)[0]
}

const countOrderQuery = () => {
    const query = `SELECT COUNT(*) as count
                    FROM shop_db.order_tbl`
    return promiseQuery(query)[0]
}

const orderByTimeQuery = (start, end) => {
    const query = `SELECT *
                    FROM shop_db.order_tbl
                    WHERE date BETWEEN '${start}' AND '${end}'`
    return promiseQuery(query)
}

module.exports = {  getOrderWithProductBYidQuery, 
                    getOrdersBtUserIdQuery, 
                    getCartQuery,
                    postOrderQuery,
                    pustOrderQuery, 
                    deleteOrderQuery, 
                    countOfOrderByUserQuery, 
                    tatalPaymentQuery, 
                    avgPaymentQuery, 
                    countOrderQuery, 
                    orderByTimeQuery 
                }  