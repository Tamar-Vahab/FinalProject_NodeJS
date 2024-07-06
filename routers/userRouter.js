const { Router } = require("express");

const { loginUser, getAllUsers, registerUser } = require("../actions/userActions");

const usersRouter = Router();

usersRouter.get('/', async (req, res) => {
    try {
        const users = await getAllUsers();
        if (users != null)
            res.status(200).send({success:true, users:users});
        else
            res.status(401).send({success:false, users:null});
    }
    catch (err) {
        res.status(500).send(err);
    }
})
 
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


usersRouter.post('/register', async (req, res) => {
    const { user_name, email, password, street, city, house_number, phone, status } = req.body;
    const user = {
        user_name:user_name,
        email:email,
        password:password,
        street:street,
        city:city,
        house_number:house_number,
        phone:phone,
        status:status
    }

    try {
        const result = await registerUser(user);
        if (result == true)
            res.status(200).send({success:true, users:users});
        else
            res.status(401).send({success:false, users:null});
    }
    catch (err) {
        res.status(500).send(err);
    }
})

module.exports = { usersRouter };