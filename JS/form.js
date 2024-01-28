// Server-side code (Node.js with Express.js)

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// Require secret.js to access the emailPassword property
const secrets = require('./secret');

const app = express();
const PORT = 3000;

// Middleware to parse JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST route to handle form submission
app.post('/submit-form', (req, res) => {
    // Extract form data from request body
    const formData = req.body;

    // Send email using Nodemailer with the password from secret.js
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'emmanuelayofame@gmail.com',
            pass: secrets.emailPassword // Access password from secret.js
        }
    });

    const mailOptions = {
        from: 'emmanuelayofame@gmail.com',
        to: 'emmanuelayofame@gmail.com',
        subject: 'New Form Submission',
        text: `Name: ${formData['student-name']}\nEmail: ${formData['student-email']}\nDOB: ${formData['birth-date']}\nQuestion 1: ${formData['q1']}\nQuestion 2: ${formData['q2']}\nDegree: ${formData['customer']}\nAdditional Information: ${formData['css-questions']}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Form submitted successfully');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
