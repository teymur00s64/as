const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 4000

const connect = async () =>{
    await mongoose.connect(process.env.DB)
    .then(()=> console.log('db connected'))
    .catch(()=> console.log('db connection failed'))
}
app.listen(PORT, ()=>{

})