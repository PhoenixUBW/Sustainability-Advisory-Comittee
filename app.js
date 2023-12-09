const express = require("express")
const app = express()
const port = 3000;

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.use(express.static("public"));

app.listen(port, () => {console.log(`App listening on port: ${port}`)})

app.post('/form', jsonParser, (req, res) => {
    const body = req.body;
    const firstName = body.firstName;
    const surname = body.surname;
    const email = body.email;
    const comments = body.comments;
    res.send(`POST by form.js - first name =${firstName}  , surname = ${surname},  email = ${email},  comments = ${comments}`)
});