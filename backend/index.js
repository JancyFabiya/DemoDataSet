const express=require('express')
const app=express()
const dotenv = require('dotenv')
var cors=require('cors')


dotenv.config()

app.use(cors())


app.listen(process.env.PORT,()=>{
    console.log('listening');
})