const jwt = require('jsonwebtoken');


exports.validateJwt = async(req, res, next)=>{

    try{
        const token = req.headers['access-token'];
        if(!token){
            return res.status(400).json({message: "JWT access token not found"})
        }
        jwt.verify(token, req.app.get('secret-key'), function(err, decodedData){
            if(err){
                console.log(err);
                return res.status(400).json({message: err.message})
            }
            req.body.userId = decodedData._id
        })
        next();


    }catch(err){
        console.log(err);
        return res.status(500).json({message: 'internal server error'}) 
    } 
}
