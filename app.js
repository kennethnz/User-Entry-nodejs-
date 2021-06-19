const express = require('express')
const morgan = require('morgan')
const env = require('dotenv')
const path =require('path')
const db = require('./server/database/database')
// const ejs = require('ejs')
env.config({path:'config.env'})
const PORT = process.env.PORT


db()
const app = express()
app.use(morgan('tiny'))

app.use('/css',express.static(path.resolve(__dirname,'assets/css')))
app.use('/js',express.static(path.resolve(__dirname,'assets/js')))

app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs')

app.use('/',require('./server/router/router'))


app.listen(PORT,()=>{
    console.log('server is up on ' + PORT + '....')
})
