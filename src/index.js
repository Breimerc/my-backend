'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./configs/db');
const router = require('./routes/route');
const app = express();

const port = process.env.PORT || 3030;

db.authenticate()
    .then( () =>{
        console.log('CONECTADO A DB');
    })
    .catch(error =>{
        console.log(`Error ${error}`);
    });

app.use(bodyParser.json());

app.use('/', router);

app.listen(port, ()=> console.log(`server: localhost:${port}`));

