const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs'); // needed to read files.
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // public directory

app.get('*', (req, res) => {
  res.sendFile(path.join('public', 'index.html'));
});

app.post('/form', (req, res) => { // this one works for all footers
  const body = req.body;
  // Read existing data from the file
  const originalDataInDB = JSON.parse(fs.readFileSync('body.json', 'utf8'));
  originalDataInDB.push(body);
  fs.writeFileSync('body.json', JSON.stringify(originalDataInDB));
  res.send(`Hi ${body.firstName} ${body.surname}, thanks for signing up. A confirmation email has been sent to: ${body.email}`);
});

app.post('/newsletterForm', (req, res) => { // this is just for the newsletter version.
  const body = req.body;
  const originalDataInDB = JSON.parse(fs.readFileSync('body.json', 'utf8'));
  originalDataInDB.push(body);
  fs.writeFileSync('body.json', JSON.stringify(originalDataInDB));
  res.send(`Hi ${body.firstName} ${body.surname}, thanks for signing up. A confirmation email has been sent to: ${body.email}`);
});

app.listen(port, () => {
  console.log(`✨ Server running on: http://localhost:${port} ✨`);
});
