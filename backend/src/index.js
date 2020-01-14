const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const port = 3333;

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@oministack-paq5s.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());

app.use(routes);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});