const express = require('express');
const app = express();
const port = 3000;
const faker = require('faker');
const bodyParser = require('body-parser');



const pathApi = '/api/v1';

const users = [];
for (let i =0; i < 5; i++) {
    users.push({
        nom: faker.name.firstName(),
        prenom: faker.name.lastName(),
        email: faker.internet.email()
    })
}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// GET /users
// RECUPERER TOUS LES UTILISATEURS

app.get(`${ pathApi }/users`, (req, res) => {

    res.json({
        data: users
    });

});
// GET /users/:id

app.get(`${ pathApi }/users/:id`, (req, res) => {

    const id = req.params.id - 1;
    res.json({
        data: users[id] || null
    })
});

// POST /users // CREER USERS

app.post(`${ pathApi }/users`, (req, res) => {
    const test = req.body
    console.log(test);

    res.json({
        data: undefined
    })
})

// PUT users/:id

// DELETE /users/:id



app.listen(port, () => {
    console.log('listening on port 3000');
});
