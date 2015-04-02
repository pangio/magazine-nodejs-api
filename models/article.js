'use strict';

var ArticleSchema = require('../schemas/articleSchema.js');

exports.save = function (article, callback){
	ArticleSchema.create(article, function (err, article) {
    if (err) return callback(err, null);
		console.log('Article created.');
    callback(null, article);
  });
};

exports.list = function(callback) {
	ArticleSchema.find(function (err, articles) {
    if (err) return callback(err, null);
		console.log('Articles list...');
    callback(null, articles);
  });
};

exports.findOne = function(articleId, callback) {
	ArticleSchema.findOne({'_id':articleId},function(err, article) {
	  if (err) return callback(err, null);
		console.log('Article id '+articleId+' found.');
    callback(null, article);
  });
};

exports.delete = function(articleId, callback) {
	ArticleSchema.remove({'_id':articleId},function(err, article) {
	  if (err) return callback(err, null);
		console.log('Article id '+articleId+' deleted.');
    callback(null, article);
  });
};

exports.update = function (articleId, article, callback){
	ArticleSchema.update({'_id':articleId}, article, function (err, article) {
    if (err) return callback(err, null);
		console.log('Article id '+articleId+' updated.');
    callback(null, article);
  });
};
