const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
transactionHash: String,
state: String,
network: String,
createdAt: Date,
to: String,
from: String,
smart: String,
user:{
    type: mongoose.Schema.Types.ObjectId,
       ref: "User"
    },

})

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
 