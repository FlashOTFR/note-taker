const express = require('express');
const fs = require('fs');
const util = require('util');
const path = require('path');


const app = express();
const PORT = 8080;

//routes

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));




















//listener

app.listen(PORT, () => console.log('App listening on PORT ' + PORT));