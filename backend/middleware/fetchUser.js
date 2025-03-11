const jwt = require('jsonwebtoken');
const JWT_SECRET = "hriytik is good boy"

const fetchuser = (req,res, next)=>{
    //get the user from the jwt token and add id to the request

    const token=req.header('auth-token');
    if(!token){
        res.send(401).send("Please authenticate with a valid token") 
    }

    try {
        const data =jwt.verify(token,JWT_SECRET);
        req.user=data.user;
        next();
        
    } catch (error) {
         res.send(401).send("Please authenticate with a valid token") 
    }
}

module.exports=fetchuser;