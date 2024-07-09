const { Router } = require("express");

const {
    getOrderWithProductBYid,
    getOrdersBtUserId,
    getCart,
    postOrder,
    pustOrder,
    deleteOrder,
    countOfOrderByUser,
    tatalPayment,
    avgPayment,
    countOrder,
    orderByTime
}
    = require("../actions/orderAction");

const ordersRouter = Router();

ordersRouter.get('/byTime/:start/:end', async (req, res) => {
    try {
        const orders = await orderByTime(req.params.start, req.params.end);
        res.status(200).send({ success: true, orders: orders });
    }
    catch (err) {
        res.status(500).send(err);
    }
})

ordersRouter.get('/count', async (req, res) => {
    try {
        const count = await countOrder();
        res.status(200).send({ success: true, count: count });
    }
    catch (err) {
        res.status(500).send(err);
    }
})

ordersRouter.get('/avgPayment/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const avg = await avgPayment(userId);
        if (avg != null)
            res.status(200).send({ success: true, avg: avg });
        else
            res.status(401).send({ success: false, avg: null });
    }
    catch (err) {
        res.status(500).send(err);
    }
})

ordersRouter.get('/total/:userid', async (req, res) => {
    const { userid } = req.params;
    try {
        const tatal = await tatalPayment(userid);
        if (tatal)
            res.status(200).send({ success: true, tatal: tatal });
        else
            res.status(401).send({ success: false, tatal: null });
    }
    catch (err) {
        res.status(500).send(err);
    }
})

ordersRouter.get('/countOrdersByUser/:userid', async (req, res) => {
    const { userid } = req.params;
    try {
        const count = await countOfOrderByUser(userid);
        res.status(200).send({ success: true, count: count });
    }
    catch (err) {
        res.status(500).send(err);
    }
})

ordersRouter.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await deleteOrder(id);
        if (result == true)
            res.status(200).send({ success: true, order: null });
        else
            res.status(401).send({ success: false, order: null });
    }
    catch (err) {
        res.status(500).send(err);
    }
})

ordersRouter.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { order } = req.body;
    try {
        const result = await pustOrder(id, order);
        if (result == true)
            res.status(200).send({ success: true, order: order });
        else
            res.status(401).send({ success: false, order: null });
    }
    catch (err) {
        res.status(500).send(err);
    }
})

ordersRouter.post('/add', async (req, res) => {
    const order = req.body;
    try {
        const result = await postOrder(order);
        if (result)
            res.status(200).send({ success: true, order: result });
        else
            res.status(401).send({ success: false, order: null });
    }
    catch (err) {
        res.status(500).send(err);
    }
})

ordersRouter.get('/cart/:userid', async (req, res) => {
    const { userid } = req.params
    try {
        const cart = await getCart(userid);
        if (cart != null)
            res.status(200).send({ success: true, cart: cart });
        else
            res.status(401).send({ success: false, cart: null });
    }
    catch (err) {
        res.status(500).send(err);
    }
})

ordersRouter.get('/userId/:userid', async (req, res) => {
    const { userid } = req.params;
    try {
        const orders = await getOrdersBtUserId(userid);
        if (orders != null)
            res.status(200).send({ success: true, orders: orders });
        else
            res.status(401).send({ success: false, orders: null });
    }
    catch (err) {
        res.status(500).send(err);
    }
})

ordersRouter.get('/productsByOrderId/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const products = await getOrderWithProductBYid(id);
        if (products)
            res.status(200).send({ success: true, products: products });
        else
            res.status(401).send({ success: false, products: null });
    }
    catch (err) {
        res.status(500).send(err);
    }
})

module.exports = { ordersRouter };
 