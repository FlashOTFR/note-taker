const express = require('express');



const notes = app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));
const homepage = app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));


module.exports = {
    notes,
    homepage
}