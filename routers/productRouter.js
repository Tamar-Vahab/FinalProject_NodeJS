const { Router } = require("express");

const { getAllProducts, addProduct, updateProduct, deleteProduct } = require("../actions/productAction");

const productsRouter = Router();

productsRouter.get('/', async (req, res) => {
    try {
        const products = await getAllProducts();
        if (products != null)
            res.status(200).send({success:true, products:products});
        else
            res.status(401).send({success:false, products:null});
    }
    catch (err) {
        res.status(500).send(err);
    }
})

productsRouter.post('/add', async (req, res) => {
    const product = req.body;

    try {
        const result = await addProduct(product);
        if (result == true)
            res.status(200).send({success:true, users:users});
        else
            res.status(401).send({success:false, users:null});
    }
    catch (err) {
        res.status(500).send(err);
    }
})

productsRouter.put('/update', async (req, res) => {
    const product = req.body;
    const id = req.body.id;

    try {
        const result = await updateProduct(id, product);
        if (result == true)
            res.status(200).send({success:true, users:users});
        else
            res.status(401).send({success:false, users:null});
    }
    catch (err) {
        res.status(500).send(err);
    }
})

productsRouter.delete('/delete', async (req, res) => {
    const id = req.body.id;

    try {
        const result = await deleteProduct(id);
        if (result == true)
            res.status(200).send({success:true, users:users});
        else
            res.status(401).send({success:false, users:null});
    }
    catch (err) {
        res.status(500).send(err);
    }
})

module.exports = { productsRouter };