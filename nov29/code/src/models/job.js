const mongoose = require('mongoose')

//Job Schema
const jobSchema = new mongoose.Schema({
    title : {type : String, required : true},
    rating : {type : Number, required : true},
    notice : {type : Number, required : true},
    type : {type : String, required : true},
    skill : [{type : String, required : true}],
    city : {type : String, required : true},
    state : {type : String, required : true},
    company : {type : mongoose.Schema.Types.ObjectId, ref :'company', required : true}
},{
    versionKey : false,
    timestamps : true
})

module.exports = mongoose.model('job', jobSchema)