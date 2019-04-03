const winston = require('winston');
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const config = require('config');


//mongodb://<USERNAME>:<PASSWORD>@stitch.mongodb.com:27020/?authMechanism=PLAIN&authSource=%24external&ssl=true&appName=ahmed-vgcyz:mongodb-atlas:local-userpass

  const db = "";
mongoose.connect(db,{ useNewUrlParser: true })
  .then(()=> console.log(`connected to MongoDB...${db}`))
  .catch(err => console.log('could not connect to mogodb', errs));


require('./startup/logging')();
require('./startup/routes')(app);
//require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();
require('./startup/prod')(app);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));

module.exports = server;

