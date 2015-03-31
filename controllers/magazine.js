'use strict';

var model = require('../models/magazine');

exports.save = function(req, res, next) {
	var magazine = _.clone(req.body);
    model.save(magazine, function(err, data){
      if (err) return res.send(503, err);
			res.send(200, req.body);
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
	var magazineId = req.params.id;
	model.findOne(magazineId,function(err, data) {
		res.status(err ? 503 : 200).json({
			error: err ? true : null,
			errorMessage: err ? err : null,
			data: data
		});
	});
};

exports.delete = function(req, res, next) {
	var magazineId = req.params.id;
	model.delete(magazineId,function(err, data) {
		res.status(err ? 404 : 200).json({
			error: err ? true : null,
			errorMessage: err ? err : null,
			data: data
		});
	});
};

exports.update = function(req, res) {
  var magazineId = req.params.id;
  model.update(magazineId, req.body, function (err, data) {
		res.status(err ? 503 : 200).json({
			error: err ? true : null,
			errorMessage: err ? err : null,
			data: data
		});
  });
}
