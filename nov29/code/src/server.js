const express = require('express')
const connect = require('./config/db')
const app = express()
app.use(express.json())

const jobSchema = require('./controllers/job')
app.use('/job', jobSchema)

const companySchema = require('./controllers/company')
app.use('/company', companySchema)



app.listen('2000', async ()=>{
    await connect()
    console.log('listening on 2000')
})