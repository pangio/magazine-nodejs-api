'use strict';

var TagSchema = require('../schemas/tagSchema.js');

exports.save = function (tag, callback){
	TagSchema.create(tag, function (err, tag) {
    if (err) return callback(err, null);
		console.log('Tag created.');
    callback(null, tag);
  });
};

exports.list = function(callback) {
	TagSchema.find(function (err, tags) {
    if (err) return callback(err, null);
		console.log('Tags list...');
    callback(null, tags);
  });
};

exports.findOne = function(tagId, callback) {
	TagSchema.findOne({'_id':tagId},function(err, tag) {
	  if (err) return callback(err, null);
		console.log('Tag id '+tagId+' found.');
    callback(null, tag);
  });
};
