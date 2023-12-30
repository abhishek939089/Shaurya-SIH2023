const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true 
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
     password:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        require:true,
    },
    contract:{
        type:String,
        require:true,
    },
    Wallet:{
        type:String,
        require:true,
    },
    metaWallet:{
        type:String,
        require:true,

    }

    

},{timestamps:true}
)

module.exports  = mongoose.model("User",UserSchema)