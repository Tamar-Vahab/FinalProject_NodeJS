const { Router } = require("express");

const { loginUser } = require("../actions/userActions");

const usersRouter = Router();


usersRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await loginUser(email, password);

        if (user != null)
            res.status(200).send({success:true, user:user});
        else
            res.status(401).send({success:false, user:null});
    }
    catch (err) {
        res.status(500).send(err);
    }

})

module.exports = { usersRouter };