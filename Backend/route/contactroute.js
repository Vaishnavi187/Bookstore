 const express = require('express');

const getmail = require('../controllers/ContactControllers');

 const routter=express.Router()


 routter.post('/get',getmail)
 module.exports=routter