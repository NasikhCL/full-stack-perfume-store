const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.userSignUp = async(req, res)=>{

    try{
        const user = await User.findOne({email: req.body.email})
        console.log(user)
        if (user) {
            return res
              .status(400)
              .json({ message: "user already exist,please try signin" });
          } else {
            const newUser = await User.create(req.body);
            // console.log(newUser)
            res.status(200).json({ message: "users added successfully" });
          }



    }catch(err){
        console.log('internal server error', err);
        return res.status(500).json({message: 'internal server error'})
    }
// return res.send('user signup')
}



exports.userSignIn = async(req, res)=>{
    try{    
        const user = await User.findOne({email: req.body.email})
        console.log(user);

        if(!user){
            return res.status(400).json({message: "please signup first"})
        }
        const isPasswordMatching = bcrypt.compareSync(req.body.password, user.password)
        if(!isPasswordMatching){
            return res.status(400).json({message: "incorrect password"})
        }

        const { _id, email, firstname} = user

        var token = jwt.sign({ _id, email, firstname }, req.app.get('secretKey'), {
          expiresIn: "2hr",
        });
        // console.log(token)
        return res.status(200).json({token, token, message : "signin successfully"})

    }catch(err){
        console.log(err);
        return res
          .status(500)
          .json({ error: err, message: "Internal server error" });
    }
    

}