const Customers= require('../models/customer.model');

exports.getCustomers = async(req,res)=>{
    try{
        const customers=await Customers.find();
        res.send(customers);
    }catch(err){
        res.status(400).json({message: err.message})
    }
}


exports.customerRegister = async(req, res) =>{
    const {name, email, balance} = req.body;

    try{
        var customer= new Customers({
            name:name,
            email:email,
            balance:balance
        })
        await customer.save();
        res.status(201).json('Customer Added');
    }catch(err){    
        res.status(400).json({message:err.message});
    }
}