const express= require('express');
const getCustomer= require('../controllers/customers')
const getTransaction= require('../controllers/transactions');
const router= express.Router();

router.get('/customers', getCustomer.getCustomers);
router.post('/customers', getCustomer.customerRegister);

router.get('/transactions', getTransaction.getTransactions);
router.post('/transactions', getTransaction.createTransaction);

module.exports= router;
