const express = require('express');
const app = express();


app.use('/', express.static('public'));

app.get('/', ()=>{
    console.log('hello')
})



module.exports = app;