const express = require('express');

const api = express();

api.get('/api', (req,res) => {
    res.status(200).send('Hello World API');
});

api.listen(5000, () => {
    console.log('Api is running at http://localhost:5000');
});