const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const jwt = require('jsonwebtoken');
var cors = require('cors');
const { Schema } = mongoose;
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);
require('./models/staff');
const Staff = mongoose.model('staff');
const app = express();

//enables cors
app.use(cors({
  'origin': '*',
  'preflightContinue': false
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/index')(app);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log('App listening on port ' + port));

