const Admin = require('../models/Admin')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



exports.AdminSignUp = async(req, res)=>{

    try{
        const admin = await Admin.findOne({email: req.body.email})
        console.log(admin)
        if (admin) {
            return res
              .status(400)
              .json({ message: "admin already exist,please try signin" });
          } else {
            const newAdmin = await Admin.create(req.body);
            // console.log(newUser)
            res.status(200).json({ message: "admin added successfully" });
          }



    }catch(err){
        console.log('internal server error', err);
        return res.status(500).json({message: 'internal server error'})
    }
// return res.send('user signup')
}




exports.AdminSignIn = async(req, res)=>{
    try{    
        const admin = await Admin.findOne({email: req.body.email})
        console.log(admin);

        if(!admin){
            return res.status(400).json({message: "please signup first"})
        }
        const isPasswordMatching = bcrypt.compareSync(req.body.password, admin.password)
        if(!isPasswordMatching){
            return res.status(400).json({message: "incorrect password"})
        }

        const { _id, email, firstname} = admin

        var token = jwt.sign({ _id, email, firstname }, req.app.get('secret-key'), {
          expiresIn: "2hr",
        });
        // console.log(token)
        return res.status(200).json({token, token, message : "Admin signin successfully"})

    }catch(err){
        console.log(err);
        return res
          .status(500)
          .json({ error: err, message: "Internal server error" });
    }
    

}