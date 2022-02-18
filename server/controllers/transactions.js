const Transactions= require('../models/transaction.model');
const Customers= require('../models/customer.model');

exports.getTransactions=async (req, res)=>{
    try{
        const transactions= await Transactions.find();
        res.status(200).send(transactions);
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

exports.createTransaction=async(req, res)=>{
    const from= req.body.from;
    const to= req.body.to;
    const amount= req.body.amount;

    try{
        const sender= await Customers.findById({_id: from});
        if(Number(sender.balance)-Number(amount) < 0){
            res.send({message:`Can't make Transaction! Insufficient Balance`});
        }else{
            const newBalance= Number(sender.balance)-Number(amount);
            const updateBalance= await Customers.findByIdAndUpdate({_id:from}, {balance: newBalance});
            const receiver= await Customers.findById({_id:to});
            const newReceiverBalance= Number(receiver.balance)+Number(amount);
            const updateReceiverBalance= await Customers.findByIdAndUpdate({_id:to}, {balance: newReceiverBalance})
            const newTransaction= new Transactions({
                from: updateBalance.name,
                to:updateReceiverBalance.name,
                amount:amount
            })
            await newTransaction.save();
            res.status(201).json("Tranfered Money");
        }
    }catch(err){
        res.status(409).json({message: err.message}); 
    }
}   