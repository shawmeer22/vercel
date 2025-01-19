const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3001; // You can choose any port you'd like

// Middleware to parse incoming JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the static files (HTML, CSS, JS) from your 'assets' folder
app.use(express.static(path.join(__dirname, 'assets')));

// Serve the index.html file at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    // Process the form data (e.g., send email, save to database)
    console.log(`Form submitted with: Name: ${name}, Email: ${email}, Message: ${message}`);

    res.send('Form submitted successfully!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
