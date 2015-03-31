'use strict';

var MagazineSchema = require('../schemas/magazineSchema.js');

exports.save = function (magazine, callback){
	MagazineSchema.create(magazine, function (err, magazine) {
    if (err) return callback(err, null);
		console.log('Magazine created.');
    callback(null, magazine);
  });
};

exports.list = function(callback) {
	MagazineSchema.find(function (err, magazines) {
    if (err) return callback(err, null);
		console.log('Magazines list...');
    callback(null, magazines);
  });
};

exports.findOne = function(magazineId, callback) {
	MagazineSchema.findOne({'_id':magazineId},function(err, magazine) {
	  if (err) return callback(err, null);
		console.log('Magazine id '+magazineId+' found.');
    callback(null, magazine);
  });
};

exports.delete = function(magazineId, callback) {
	MagazineSchema.remove({'_id':magazineId},function(err, magazine) {
	  if (err) return callback(err, null);
		console.log('Magazine id '+magazineId+' deleted.');
    callback(null, magazine);
  });
};

exports.update = function (magazineId, magazine, callback){
	MagazineSchema.update({'_id':magazineId}, magazine, function (err, magazine) {
    if (err) return callback(err, null);
		console.log('Magazine id '+magazineId+' updated.');
    callback(null, magazine);
  });
};
