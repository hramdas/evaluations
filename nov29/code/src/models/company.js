const mongoose = require('mongoose')

//Company Schema
const coSchema = new mongoose.Schema({
    name : {type : String, required : true},
    location : {type : String, required : true}
},
{
    versionKey : false
})

module.exports = mongoose.model('company', coSchema)