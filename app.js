const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Set up middleware to parse JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve HTML, CSS, and JS files
app.use(express.static('public'));

// Route to handle form submissions
app.post('/submit', (req, res) => {
  const input1 = req.body.input1;
  const input2 = req.body.input2;

  // You can do something with the inputs here
  console.log(`Input 1: ${input1}`);
  console.log(`Input 2: ${input2}`);

  // Send a response back
  res.send('Inputs received successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
