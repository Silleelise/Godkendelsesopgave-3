// import express from 'express';
// sådan at den snakker sammen med users filen
// import usersRoutes from './routes/user.js';

const express = require('express');
const server = express();
const PORT = process.env.port || 4000;

const loginController = require('./Controller/loginController') 

// sådan at vi bruger alle routerne i Users filen, så når folk besøger dem kører routerne
// app.use('/users', usersRoutes)
// et API endpint, vores basic route, med en get request til vores homepage '/', efterfulgt af 

server.get("/", (req, res) => {
   res.send('hej')
});
server.get("/test", (req, res) => {
    res.json({'test' : "kæmpe test"})
 })

 //vil gerne have User og de tre krav ind her
// vi lytter på porten

server.listen(PORT, err => {
    console.log(`listening on port http://localhost:${PORT}`);
});

app.get('/users', getAllUsers); // get all users
app.post('/users', createUser); // create a new user
app.put('/users', updateUser); // update a user
app.delete('/users', deleteUser); // delete a user



