const mongoose = require('mongoose');


const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        category:{
            type : Array
        },
        imageUrl:{
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        quantity:{
            type: Number,
            require: true
        },
        isActive: {
            type: Boolean,
            default: true
        },
        bought_by:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }]
    },{timestamps: true} 
)


const Product = mongoose.model('Product', productSchema);

module.exports = Product