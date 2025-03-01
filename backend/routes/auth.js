const express = require('express')
const User = require('../models/User');
const { body } = require('express-validator');
const { query, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET="hriytik is good boy"


// create a user using POST: "/api/auth". Doesn't require Auth
router.post('/', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password, atleast 3 characters.').isLength({ min: 3 })
], async (req, res) => {

    //if there are errors, return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // check if user with same email already exists
    try {
        const userPresent = await User.findOne({ email: req.body.email });
        if (userPresent) {
            return res.status(400).json({ error: "Sorry a user with this email already exists." })
        }

        const salt = await bcrypt.genSalt(10);
        const secPassword = await bcrypt.hash(req.body.password, salt);
        //create a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPassword,
        })
        const data ={
            user :{
                id:user.id
            }
        }
        const authToken = jwt.sign(data,JWT_SECRET);
        console.log(authToken);
        
        res.json({authToken})
        

    } catch (err) {
        res.status(500).send("Ran into some error");
    }
})


module.exports = router;