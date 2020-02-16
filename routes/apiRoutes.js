const express = require('express');
const path = require('path');
const dbData = require('../db/db.json');
const fs = require('fs')

const updateDB = data => {
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(data), err => {
        if (err) throw err;
    })
}


module.exports = app => {

    // Get command 
    app.get('/api/notes', (req, res) => {
        
        res.json(dbData)});

    // Post command
    app.post('/api/notes', (req, res) => {
    
        const {title, text} = req.body;
        const newNote = {title, text, id:Math.random().toFixed(4)};
        dbData.push(newNote);
        updateDB(dbData);

        res.json(dbData);

    })

    // Delete command

    app.delete('/api/notes/:id', (req, res) => {
        const id = req.params.id;
        let notes = '';
        notes = dbData.filter(function(check){return check.id !== id});
        console.log(notes);
    })
}
