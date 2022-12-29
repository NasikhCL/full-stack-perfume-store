const express = require('express');

const app = express();
const port = 8000
const bodyParser = require('body-parser')
const db = require('./config/mongoose');
const routes = require('./routes/index')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.set('secret-key', 'privateKeyhduqh09321e12312')
app.use('/', routes)

app.listen(port , (err)=>{
    if(err){
        console.log('error running server');
        return err;
    }
    console.log('server running in port: ', port);

})