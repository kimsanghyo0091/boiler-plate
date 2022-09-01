// Load HTTP module
const express = require("express");


const app = express()
const port = 8000;



const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kimsanghyo90:Bx7HO17ieUPSjpru@boiler-plate.gmpu65o.mongodb.net/?retryWrites=true&w=majority').then(()=> console.log('MongoDB Well connected..')).catch(err=> console.log(err))

app.get('/',(req,res)=>res.send('hello!'))

app.listen(port,()=>console.log('statred!1'))

