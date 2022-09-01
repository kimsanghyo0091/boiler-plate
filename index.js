// Load HTTP module
const express = require("express");


const app = express()
const port = 8000;
const bodyParser = require('body-parser');
const { User } = require("./models/User") 

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kimsanghyo90:Bx7HO17ieUPSjpru@boiler-plate.gmpu65o.mongodb.net/?retryWrites=true&w=majority').then(()=> console.log('MongoDB Well connected..')).catch(err=> console.log(err))

app.get('/',(req,res)=>res.send('hello!'))

app.post('/register', (req,res)=> {
    const user = new User(req.body);

    user.save((err, doc) =>{
        if(err) return res.json({ success: false, err})
        return res.status(200).json({ success: true});
    })

}); 

app.listen(port,()=>console.log('statred!1'))

