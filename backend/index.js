const express=require('express')
const dotenv = require('dotenv')
var cors=require('cors')

const dataRoute = require('./router/dataRoute.js') 

//Routes

const app=express()


dotenv.config()

app.use(cors())


app.listen(process.env.PORT,()=>{
    console.log('listening');
})

//usage of routes
app.use('/data',dataRoute)