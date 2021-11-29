const express = require('express');
const company = require('../models/company');
const router = express.Router()
const Job = require('../models/job')
const Company = require('../models/company')

router.post('/', async (req, res)=>{
    const job = await Job.create(req.body)
    res.status(201).send(job)
})

//Get all jobs
router.get('/', async (req, res)=>{
    const jobs = await Job.find().populate('company').lean().exec()
    res.status(200).send(jobs)
})

router.get('/skill/:id', async (req, res)=>{
    req.params.id = req.params.id.toLowerCase()
    const jobs = await Job.find({skill : req.params.id}).populate('company').lean().exec()
    res.status(200).send(jobs)
})

//get jobs which matches city and skill
router.get('/skillcity/:skill/:city', async (req, res)=>{
    const jobs = await Job.find({skill : req.params.skill, city : req.params.city}).populate('company').lean().exec()
    res.status(200).send(jobs)
})

// Get Work From Home jobs
router.get('/type/:id', async (req, res)=>{
    const jobs = await Job.find({type : req.params.id}).populate('company').lean().exec()
    res.status(200).send(jobs)
})


// sort by Notice period
router.get('/notice/:month', async (req, res)=>{
    const jobs = await Job.find({notice : req.params.month}).populate('company').lean().exec()
    res.status(200).send(jobs)
})

//sort by rating
router.get('/sort', async (req, res)=>{
    const jobs = await Job.find().sort({rating : -1}).populate('company').lean().exec()
    res.status(200).send(jobs)
})

//most open jobs
router.get('/mostjob', async (req, res)=>{
    const jobs = await Job.find().lean().exec()
  
    var obj = {}
    for(var i=0; i< jobs.length; i++){
        obj[jobs[i].company] = obj[jobs[i].company] ? obj[jobs[i].company] +=1 : obj[jobs[i].company] = 1
    }

    var arr = []
    for(var i in obj){
        arr.push([i, obj[i]])
    }

    arr.sort((a,b)=>b[1] - a[1])
    const company = await Company.findById(arr[0][0])
    const companyJobs = await Job.find({company : company})

    res.status(200).send({"Company Name" : company, "Number of Job Opening" : companyJobs.length, "Jobs" : companyJobs})

})


module.exports = router
