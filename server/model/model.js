const mongoose = require('mongoose')


var crudeSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:String,
    status:String
})


const Userdb = mongoose.model('crud3', crudeSchema)

module.exports = Userdb