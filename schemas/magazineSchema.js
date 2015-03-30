'use strict';

var mongoose = require('mongoose');

/*
 * Mongoose schema definition
 */
var MagazineSchema = new mongoose.Schema({
  name: String,
  description: String
});

// Convert the Schema into Model and export it.
module.exports = mongoose.model('Magazine', MagazineSchema);
