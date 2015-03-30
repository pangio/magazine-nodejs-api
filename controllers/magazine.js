'use strict';

var model = require('../models/magazine');
var _ = require('underscore');

exports.save = function(req, res, next) {

	console.log("Controller > Magazines " + JSON.stringify(req.body));
	var magazine = _.clone(req.body);
    model.save(magazine, function(err, data){
      if (err) return res.send(503, err);
			res.send(200, req.body);
    })
};

exports.get = function(req, res, next) {
  model.get(function(err, data){
		res.status(err ? 503 : 200).json({
      error: err ? true : null,
      errorMessage: err ? err : null,
      data: data
    });
  });
};
