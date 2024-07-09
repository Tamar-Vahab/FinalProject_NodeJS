
const { Router } = require("express");

const { postProductOrder, deleteProductOrdersByOrder } = require('../actions/productOrderAction');

const productOrdersRouter = Router();

productOrdersRouter.post('/add/:orderId', async (req, res) => {
    const { productOrder } = req.body;
    const orderId = req.params.orderId;

    try {
        const result = await postProductOrder(orderId, productOrder);
        res.status(200).send({ success: true, result: result });
    }
    catch (err) {
        res.status(500).send(err);
    }
})

productOrdersRouter.delete('/delete/:orderId', async (req, res) => {
    const orderId = req.params.orderId;

    try {
        const result = await deleteProductOrdersByOrder(orderId);
        res.status(200).send({ success: true, result: result });
    }
    catch (err) {
        res.status(500).send(err);
    }
})

module.exports = { productOrdersRouter };