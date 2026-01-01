const express = require('express');

const app = express();

app.use(express.json());

app.get("/health",(req,res) => {
    res.json({status:"Producer service is running "});
});

module.exports = app;

