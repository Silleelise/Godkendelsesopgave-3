// import express from 'express';
// sådan at den snakker sammen med users filen
// import usersRoutes from './routes/user.js';

const express = require('express');
const app = express();
const PORT = process.env.port || 4000;

// sådan at vi bruger alle routerne i Users filen, så når folk besøger dem kører routerne
// app.use('/users', usersRoutes)
// et API endpint, vores basic route, med en get request til vores homepage '/', efterfulgt af 

app.get("/", (req, res) => {
   res.send('hej')
});
app.get("/test", (req, res) => {
    res.json({'test' : "kæmpe test"})
 })

 // vil gerne have User og de tre krav ind her
// vi lytter på porten

app.listen(PORT, err => {
    if (err) {
        return console.log("ERROR", err);
    }
    console.log(`listening on port http://localhost:${PORT}`);
});

