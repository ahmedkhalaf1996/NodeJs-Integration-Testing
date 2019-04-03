const winston = require('winston');
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const config = require('config');


//mongodb://<USERNAME>:<PASSWORD>@stitch.mongodb.com:27020/?authMechanism=PLAIN&authSource=%24external&ssl=true&appName=ahmed-vgcyz:mongodb-atlas:local-userpass

  const db = "mongodb+srv://ahmed:1234>@cluster0-vozhb.mongodb.net";
  mongoose.connect(db)
  .then(()=> console.log(`connected to MongoDB...${db}`))
  .catch(err => console.log('could not connect to mogodb', err));


require('./startup/logging')();
require('./startup/routes')(app);

//require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();
require('./startup/prod')(app);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => winston.info(`Listening on port ${port}...`));

module.exports = server;

