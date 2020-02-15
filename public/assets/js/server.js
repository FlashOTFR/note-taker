const express = require('express');
const lib = require('./routes')
const path = require('path');


//setup

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());





//Listener

app.listen(PORT, () => console.log('App listening on PORT ' + PORT));