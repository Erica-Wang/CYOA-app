const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    dotenv = require('dotenv');

const resultRoutes = require('./result.routes');

require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(bodyParser.json());
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

