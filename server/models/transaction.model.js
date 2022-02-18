const mongoose= require('mongoose');

const Schema= mongoose.Schema;

const transactionSchema= new Schema({
   from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

var transaction= mongoose.model('transactiondata', transactionSchema);

module.exports= transaction;