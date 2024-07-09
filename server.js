const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'http://localhost:4200' // Allow only this origin to access your server
}));

app.use(express.json()); // To parse JSON bodies

// Define your routes here

// Sample GET route
app.get('/findmDocCustType/:alang', (req, res) => {
  // Your route logic here
  res.json({ message: 'This is CORS-enabled for http://localhost:4200!' });
});

// Add the missing route
app.get('/findmDoctransactionList', (req, res) => {
  // Your route logic here
  res.json({ transactions: [] }); // Replace with your actual data
});

// Sample POST route
app.post('/findUserbyalNo', (req, res) => {
  const { acctNbr, lang } = req.body;
  // Your logic to find and process the request
  const responseValue = { userId: "04101151000435" }; // Replace with your actual logic
  res.json(responseValue);
});

// Add more POST routes as needed
app.post('/findUserbycaNo', (req, res) => {
  const { acctNbr, lang } = req.body;
  // Your logic to find and process the request
  const responseValue = { userId: "04101151000436" }; // Replace with your actual logic
  res.json(responseValue);
});

// Start the server
app.listen(8080, () => {
  console.log('CORS-enabled web server listening on port 8080');
});