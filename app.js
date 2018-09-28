const express = require('express');
const app = express();
const fs = require('fs');





let http = require('http');
let https = require('https');
let privateKey  = fs.readFileSync('/var/www/html/https-backend-node-server/public/ssl/private.key', 'utf8');
let certificate = fs.readFileSync('/var/www/html/https-backend-node-server/public/ssl/certificate.crt', 'utf8');
let credentials = {key: privateKey, cert: certificate};


// Lots of other express stuff (app.use()'s)
app.use('/', express.static('public'));

app.get('/', ()=>{
    console.log('hello')
})



let httpServer = http.createServer(app);
let httpsServer = https.createServer(credentials, app);
httpServer.listen(8080);
httpsServer.listen(4430);




// module.exports = app;