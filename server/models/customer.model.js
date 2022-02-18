const mongoose= require('mongoose');

const Schema= mongoose.Schema;

const customerSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
})

var customer= mongoose.model('customerdata', customerSchema);

module.exports= customer;