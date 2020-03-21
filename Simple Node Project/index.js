const express = require("express");
const app = express();

//This sets the / route to say 'This is an express app'
app.get('/', (req, res, next) =>{
    res.send('This is an express app');
});

//This listens on the 5000 port
app.listen(5000);