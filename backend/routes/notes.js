const express= require('express')
const router = express.Router();
const Notes = require('../models/Notes')
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchUser');

router.get('/getallnotes', (req, res)=>{
    obj={
        a:'allos',
        number:25
    }
    res.json(obj)
})

module.exports= router;