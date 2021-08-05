require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');


const { SERVER_PORT } = process.env;
const emailCtrl = require('./nodemailerCtrl')

app.use(express.json());


// NodeMailer Endpoint
app.post('/api/email-us',emailCtrl.emailUs); //endpoint checked :)

// STEP 2 & 3
// app.use(express.static(__dirname + '/../build'))
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build/index.html'))
// })

app.listen(SERVER_PORT, () => console.log(`Server is running on ${SERVER_PORT}`))