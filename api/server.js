const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    dotenv = require('dotenv');

const resultRoutes = require('./result.routes');

require('dotenv').config();

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
app.use('/engisp', resultRoutes);

app.use(express.static(__dirname + '/../dist/engisp'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/../dist/engisp/index.html'));
});

const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
 console.log('Listening on port ' + port);
});

