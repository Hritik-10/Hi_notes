const express = require('express')
const User = require('../models/User');
const { body } = require('express-validator');
const { query, validationResult } = require('express-validator');
const router = express.Router();


// router.get('/', (req, res)=>{
// //    console.log(req.body)
// //    res.send("hello")
// })
router.get('/signup', (req, res) =>
    res.send('hi Hritik')
)

// create a user using POST: "/api/auth". Doesn't require Auth
router.post('/', [
    body('name','Enter a valid name').isLength({ min: 3 }),
    body('email','Enter a valid email').isEmail(),
    body('password','Enter a valid password, atleast 3 characters.').isLength({ min: 3 })
]
    , (req, res) => {
        // const user = User(req.body);
        // user.save();
        // console.log(req.body)
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        }).then(user=>res.json(user))
        .catch(err=>console.log(err), res.json({ error:"Please enter a unique value fo email", message: err.message}));

        // res.send({ errors: errors.array() });git remote remove origin

    
        // res.send(req.body)
    }) 


module.exports = router;