var express = require('express');
var router = express.Router();
var articleCtrl = require('../controllers/article');

/**
 *  Routes
 */
router.route('/')
  .post(articleCtrl.save, function(req, res){
  })
  .get(articleCtrl.list, function(req, res){
  });

router.route('/:id')
  .delete(articleCtrl.delete, function(req, res){
  })
  .get(articleCtrl.get, function(req, res){
  })
  .put(articleCtrl.update, function(req, res){
  });

module.exports = router;
