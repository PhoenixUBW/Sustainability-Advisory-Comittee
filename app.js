const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // public directory


app.get('*', (req, res) => {  // \       * to select all pages
    res.sendFile(path.join('public', 'index.html'));
  });
  

app.post('/form', (req, res) => {
  const body = req.body;
  
  const firstName = body.firstName;
  const surname = body.surname;
  const email = body.email;
  const message = body.message;

  // Read existing data from the file
  fs.readFile('body.json', 'utf8', (err, data) => {
    let existingData;
    if (data) {
        existingData = JSON.parse(data);
      } else {
        existingData = [];
      }

    existingData.push(body);

    // Write the updated data back to the file
    fs.writeFile('body.json', JSON.stringify(existingData), (writeErr) => {
      console.log('Form data appended to body.json');
      res.send(`Hi ${firstName} ${surname}, thanks for signing up. A confirmation email has been sent to: ${email}`);

    });
  });
});

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
