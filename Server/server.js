const express = require('express'); //importerer expresspbibliotek fra 'express';
const server = express(); //laver en express applikation 
const PORT = process.env.port || 4000; //sætter serveren til at lytte på port 4000

//henter de definerede klasser fra de forskellige mapper og filer  
const users = require('../Model/user')
const usercontroller = require('../Controller/usercontroller')
const logincontroller = require('../Controller/logincontroller')
const match = require('../Model/user')
const interest = require('../Model/user')

server.get("/user1", (req, res) => {
   res.json(users[0])
});

server.get("/user2", (req, res) => {
    res.json(users[1])
 });

 server.get("/match", (reg, res) => {
    res.json(match[0])
 })

 server.get("/match", (reg, res) => {
    res.json(match[1])
 })

 server.get("/interest", (reg, res) => { 
    res.json(interest[1])
 })

 //CRUD endpoints for User
server.route('/users') //laver et users endpoint
  .get(function (req, res) { //behandler get requests på /users endpoint
    res.send(JSON.stringify(users)) //viser brugere i array'et 
  })
  .post(function (req, res) { //opretter en paymentUser med attributter fra requestet
    let user = new userClass.paymentUser(req.body.name, req.body.gender, req.body.birthday, req.body.email, req.body.interest, req.body.city, req.body.password, req.body.creditCardName, req.body.creditCardNumber, req.body.creditCardExpiryDate, req.body.creditCardCVC)
    users.push(user); //tilføjer brugerne til users array
    res.send("created user") //fortæller at brugeren er oprettet 
  })

  .put(function (req, res) { //opdaterer attribut i en user udfra email
      for (index = 0; index < users.length; ++index) { //For loop: går igennem hver bruger og finder email der matcher 
          if (users[index].email==req.body.email){ 
            users[index][req.body.param] = req.body.val; //hvis der er en email der matcher, vil den ændre den attribut der er blevet reqestet og sætte den til den værdi der er blevet requestet
          }
    }

    res.send(users[index]) //fortæller at brugere er opdateret 
  })
  .delete(function (req, res){ //sletter en bruger hvor en email matcher
    for (index = 0; index < users.length; ++index) { //For loop: går igennem hver bruger og finder email der matcher
        if (users[index].email==req.body.email){ 
          users.splice(index, 1) //hvis der er en email der matcher, vil den slette brugeren
  }
      res.send("delete") //fortæller at brugeren er slettet 
  })

// Severen lytter på porten
  server.listen(PORT, err => {
    console.log(`listening on port http://localhost:${PORT}`);
});

