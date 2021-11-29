const express = require('express')
const connect = require('./config/db')
const app = express()
app.use(express.json())



app.listen('2000', async ()=>{
    await connect()
    console.log('listening on 2000')
})