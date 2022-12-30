const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds= 10;

const adminSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            require: true
        },
        lastname: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        phone: {
            type: Number,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },{timestamps: true}
)

adminSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds)
    next();
})

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;