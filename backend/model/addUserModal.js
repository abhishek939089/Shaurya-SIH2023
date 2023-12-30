const mongoose = require('mongoose')

const adduserSchema = new mongoose.Schema({
    designation: String,
    name:String,
    walletaddress: String,
    user_uid:{
            type: mongoose.Schema.Types.ObjectId,
           ref: 'User'
        },
})
module.exports  = mongoose.model('addUser',adduserSchema);