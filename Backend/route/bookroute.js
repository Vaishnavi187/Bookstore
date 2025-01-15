const express = require('express');
const { getbook, createbook } = require('../controllers/bookcontrollers');
const router=express.Router()

router.get("/",getbook
)
router.post("/create",createbook)

module.exports=router