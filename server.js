const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');



const app = express();

//bodyparser middleware
app.use(bodyParser.json());

//db setup
const db = require('./config/keys').mongoUri;

//coneec to mongo 
mongoose.connect(db,{useNewUrlParser:true}).then(
    () => console.log('MongoDB Connected')
    ).catch(err=> console.log(err));

app.use('/api/users', users)

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
});