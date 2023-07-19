const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors())
app.use(express.json())

app.post('/tikko/register',(req,res) => {
    console.log(req.headers);
    res.send('hello world');
}
);

app.listen("4000",()=>{
    console.log("connected");
})