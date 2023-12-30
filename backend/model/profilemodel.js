const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({

  username: { 
    type: String,
     required: true
     },
     
  email:{
    type:String,require:true
  },

  address:{
    type:String,require:true
  },
  city:{
    type:String,require:true
  },
  country:{
    type:String,require:true
  },
  aboutMe:{
    type:String,require:true
  },
  image:{
    type: String, 
    require: [true ,"image is required"]
 

},
user:{
  type: mongoose.Schema.Types.ObjectId,
     ref: 'User'
  },

});
 
const EUser = mongoose.model('profileuser', profileSchema);

module.exports = EUser;