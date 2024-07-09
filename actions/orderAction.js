
const { getOrderWithProductBYidQuery, 
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
    } = require('../queries/orderQuerie');

const getOrderWithProductBYid = async (id) => {
    const order = await getOrderWithProductBYidQuery(id);
    return order;
}

const getOrdersBtUserId = async (userid) => {
    const orders = await getOrdersBtUserIdQuery(userid);
    return orders;
}

const getCart = async (userid) => {
    const cart = await getCartQuery(userid);
    return cart;
}

const postOrder = async (order) => {
    const result = await postOrderQuery(order);
    return result;
}

const pustOrder = async (id, order) => {
    const result = await pustOrderQuery(id, order);
    return result;
}

const deleteOrder = async (id) => {
    const result = await deleteOrderQuery(id);
    return result;
}

const countOfOrderByUser = async (userid) => {
    const count = await countOfOrderByUserQuery(userid);
    return count;
}

const tatalPayment = async (userid) => {
    const total = await tatalPaymentQuery(userid);
    return total;
}

const avgPayment = async (userid) => {
    const avg = await avgPaymentQuery(userid);
    return avg;
}

const countOrder = async () => {
    const count = await countOrderQuery();
    return count;
}

const orderByTime = async (start, end) => {
    const orders = await orderByTimeQuery(start, end);
    return orders;
}

module.exports = { getOrderWithProductBYid, getOrdersBtUserId, getCart, postOrder, pustOrder, deleteOrder, countOfOrderByUser, tatalPayment, avgPayment, countOrder, orderByTime };