const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // files are in public folder

app.get('/goals.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'goals.html'));
});

app.post('/form', (req, res) => {
  const body = req.body;
  
  const firstName = body.firstName;
  const surname = body.surname;
  const email = body.email;
  const message = body.message;

  // Read existing data from the file
  fs.readFile('body.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading body.json:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    let existingData;
    try {
      existingData = data ? JSON.parse(data) : [];
      if (!Array.isArray(existingData)) {
        throw new Error('Existing data is not an array');
      }
    } catch (parseError) {
      console.error('Error parsing existing data:', parseError);
      res.status(500).send('Internal Server Error');
      return;
    }

    // Append the new form data
    existingData.push(body);

    // Write the updated data back to the file
    fs.writeFile('body.json', JSON.stringify(existingData), (writeErr) => {
      if (writeErr) {
        console.error('Error writing body.json:', writeErr);
        res.status(500).send('Internal Server Error');
        return;
      }

      console.log('Form data appended to body.json');
      res.send(`Hi ${firstName} ${surname}, thanks for signing up. \n A confirmation email has been sent to: ${email}`);

    });
  });
});

// For all other routes, serve an 'index.html' or any other default page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
