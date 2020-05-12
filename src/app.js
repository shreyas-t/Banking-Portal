const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.engine('pug', require('pug').__express)
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.render('index.pug',{
        titel:'Index'
    })
});

app.listen(3000,()=>{
    console.log("Banking portal running on 3000");
});