const mongoose = require('mongoose');


const orderSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            require: true
        },
        products: [
            {
                productId : {
                    type:String
                },
                quantity:{
                    type: Number,
                    default: 1
                }
            }
        ],
        amount:{
            type: Number,
            require: true
        },
        address:{
            type: Object,
            require: true
        },
        staus:{
            type: String,
            default: 'pending'
        }
    },{timestamps: true} 
)


const Order = mongoose.model('Order', orderSchema);

module.exports = Order