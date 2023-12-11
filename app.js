const express = require("express")
const app = express()
const port = 3000;

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const fs = require("fs");

app.use(express.static("public"));

app.post('/newsletter', jsonParser, (req, res) => {
        const body = req.body;
        const firstName = body.firstName;
        const lastName = body.lastName;
        const email = body.email;
        const comments = body.comments;
        const formSubmission = {
            message: "POST by form.js",
            firstName: firstName,
            lastName: lastName,
            email: email,
            comments: comments
        };

        const path = "formSubmission.json";
        console.log("CHECK")
        console.log("form data: ",formSubmission);
        fs.writeFile(path, JSON.stringify(formSubmission), (err) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                console.log('Form data saved successfully');
                res.json({ message: 'Form data saved successfully' });
            }
        });
        // res.sendFile("/Users/archa/Desktop/GitHub/Sustainability-Advisory-Comittee/public/newsletter.html")
});

app.listen(port, () => {console.log(`App listening on port: ${port}`)});