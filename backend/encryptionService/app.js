require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3333;
const messageEncrypterRoute=require('./routes/route.js');
const messageDecrypterRoute=require('./routes/route.js');

app.post("/encrypt", messageEncrypterRoute);

app.post("/decrypt", messageDecrypterRoute);


app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});
