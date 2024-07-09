
const { postProductOrderQuery, deleteProductOrdersByOrderIdQuery} = require('../queries/productOrderQueries')

const postProductOrder = async (orderid, productOrder) => {
    await postProductOrderQuery(orderid, productOrder);
}

const deleteProductOrdersByOrder = async (orderId) => {
    await deleteProductOrdersByOrderIdQuery(orderId);
}

module.exports = {
    postProductOrder,
    deleteProductOrdersByOrder
}