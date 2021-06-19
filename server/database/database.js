const mongoose = require('mongoose')


const db = async(req,res)=>{
try {

    mongoose.connect('mongodb://localhost/CRUD3',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    })
    console.log('connected to database')
} catch (err) {
    console.log(err)
    process.exit(1)
    
}



}

module.exports = db