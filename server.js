require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connect = require('./connectMongo.js');
const app = express();

app.use(express.json());
// app.use(cors);
app.use(cors({
    origin: '*'
})
);
const User = require('./schema');


app.get('/api' , async (req , res)=>{
    res.set('Access-Control-Allow-Origin', '*');
    const notes = await User.find();
    res.json({notes})
});

app.post('/api', async (req , res)=>{
    const requestBody = req.body;
    console.log(req.body)
    const newNotes = new User({
        author : requestBody.author,
        notes : requestBody.notes
    });

    await newNotes.save();
    return res.json(true);
});


const port = process.env.PORT || 8000;
app.listen(port , ()=>{
    console.log('listening to port' , port);
    connect()
});