'use strict';

var MagazineSchema = require('../schemas/magazineSchema.js');

exports.save = function (magazine, callback){
	MagazineSchema.create(magazine, function (err, magazine) {
    if (err) return callback(err, null);
    callback(null, magazine);
  });
};

exports.get = function(callback) {
	MagazineSchema.find(function (err, magazines) {
    if (err) return callback(err, null);
    callback(null, magazines);
  });
};
