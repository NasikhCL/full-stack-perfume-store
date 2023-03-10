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

        var token = jwt.sign({ _id, email, firstname }, req.app.get('secret-key'), {
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


exports.userAddToCart = async(req, res)=>{
    try{
        const reqBody = req.body
        console.log('req is bod : ' , req.body)  
        
        const addTocart = await User.findByIdAndUpdate(req.body.userId,{
            $push: {cart: {
                        name: req.body.name,
                        id: req.body.id,
                        price:req.body.price,
                        // quantity:req.body.qty

                        }
                    }
        })
        
        if (req.body.userId && addTocart ) {
           console.log(addTocart)

            return res
              .status(200)
              .json({ user: req.body.userId , message: "product added to cart successfully" ,adT: addTocart});
          } else {
            // const newUser = await User.create(req.body);
            // console.log(newUser)
            res.status(400).json({ message: "couldn't add product to cart" });
          } 



    }catch(err){
        console.log('internal server error', err);
        return res.status(500).json({message: 'internal server error'})
    }
    

}
exports.userCart = async(req, res)=>{
    try{
        const userId = req.body.userId
        const cartItems = await User.findById(userId).select('cart');
        if(cartItems){
            return res
            .status(200)
            .json({ message: "retrived cart successfully",cart: cartItems});
        }




    }catch(err){
        console.log('internal server error', err);
        return res.status(500).json({message: 'internal server error'})
    }
}

// exports.verify = async(req, res)=>{
//     try{
    
//         const token = req.headers['access-token'];
//         if(!token){
//             return res.status(400).json({message: "JWT access token not found"})
//         }
//         jwt.verify(token, req.app.get('secret-key'), function(err, decodedData){
//             if(err){
//                 console.log(err);
//                 return res.status(400).json({message: err.message,  isVerified: false})
//             }
//             return res.json({message: 'token verified', isVerified: true})
//             // req.body.userId = decodedData._id
//         })
//     }catch(err){
//         console.log('internal server error', err);
//         return res.status(500).json({message: 'internal server error'})
//     }



// }