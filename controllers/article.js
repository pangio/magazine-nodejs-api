'use strict';

var model = require('../models/article');
var _ = require('underscore');

exports.save = function(req, res, next) {
	var article = _.clone(req.body);
		model.save(article, function(err, data){
      if (err) return res.send(503, err);
			res.send(201, req.body);
    })
};

exports.list = function(req, res, next) {
  model.list(function(err, data){
		res.status(err ? 503 : 200).json({
      error: err ? true : null,
      errorMessage: err ? err : null,
      data: data
    });
  });
};

exports.get = function(req, res, next) {
	var articleId = req.params.id;
	model.findOne(articleId,function(err, data) {
		res.status(err ? 503 : 200).json({
			error: err ? true : null,
			errorMessage: err ? err : null,
			data: data
		});
	});
};

exports.delete = function(req, res, next) {
	var articleId = req.params.id;
	model.delete(articleId,function(err, data) {
		res.status(err ? 404 : 200).json({
			error: err ? true : null,
			errorMessage: err ? err : null,
			data: data
		});
	});
};

exports.update = function(req, res) {
  var articleId = req.params.id;
  model.update(articleId, req.body, function (err, data) {
		res.status(err ? 503 : 200).json({
			error: err ? true : null,
			errorMessage: err ? err : null,
			data: data
		});
  });
}
