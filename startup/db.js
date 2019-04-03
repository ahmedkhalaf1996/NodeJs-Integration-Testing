const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function() {
  const db = "mongodb+srv://Ahmed:1234@cluster0-vozhb.mongodb.net/test?retryWrites=true";
  mongoose.connect(db)
    .then(() => winston.info(`Connected to ${db}...`));
}