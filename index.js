const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`Serveur node et express chaud sur ${ PORT }`);
})

app.listen(PORT, () => {
    console.log(`Votre serveur est connecté sur le port: ${ PORT }`);
})
