const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    dotenv = require('dotenv');

const resultRoutes = require('./result.routes');

require('dotenv').config();

console.log(process.env.MONGODB_URI);

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('error', function(error) {
  console.error('Database connection error:', error);
});

mongoose.connection.once('open', function() {
  console.log('Database connected');
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded())
app.use(cors());
app.use('/', resultRoutes);

const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
 console.log('Listening on port ' + port);
});

