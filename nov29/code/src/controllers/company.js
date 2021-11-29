const express = require('express')
const router = express.Router()

const Company = require('../models/company')

//Create company
router.post('', async (req, res)=>{
    const company = await Company.create(req.body)
    res.status(201).send(company)
})

//get all company details
router.get('', async (req, res)=>{
    const company = await Company.find()
    res.status(200).send(company)
})

//Get details of the company
router.get('/:id', async (req, res)=>{
    const company = await Company.findById(req.params.id)
    res.status(200).send(company)
})



module.exports = router;