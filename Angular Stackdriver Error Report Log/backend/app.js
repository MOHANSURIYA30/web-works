const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');

const app = express();

app.use(bodyParser.json({limit:'100mb'}));
app.use(bodyParser.urlencoded({ extended: true}));

app.use((req,res,next)=>{
   res.setHeader('Access-Control-Allow-Origin','*');
   res.setHeader('Access-Control-Allow-Headers','*');
   res.setHeader('Access-Control-Allow-Methods','*');
   next();

});
app.get('/api',(req,res)=>{
    res.send('Hello Express');
})
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.send('data recieved');
})
app.post('/api/log',(req,res)=>{
    console.log(req.body);
    // console.log(chalk.white.bgCyan.bold(" CLIENT LOG :" +req.body+' '));
    res.send('log recieved');
})

app.post('/api/error',(req,res)=>{
    console.log(req.body);
    // console.log(chalk.white.bgCyan.bold(" CLIENT LOG :" +req.body+' '));
    res.send('error recieved');
})

module.exports = app;