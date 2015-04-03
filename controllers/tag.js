'use strict';

var model = require('../models/tag');
var _ = require('underscore');

exports.save = function(req, res, next) {
	var tag = _.clone(req.body);
    model.save(tag, function(err, data){
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
	var tagId = req.params.id;
	model.findOne(tagId,function(err, data) {
		res.status(err ? 503 : 200).json({
			error: err ? true : null,
			errorMessage: err ? err : null,
			data: data
		});
	});
};
