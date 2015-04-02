var express = require('express');
var router = express.Router();
var magazineCtrl = require('../controllers/magazine');

/**
 *  Routes
 */
router.route('/')
  .post(magazineCtrl.save, function(req, res){
  })
  .get(magazineCtrl.list, function(req, res){
  });

router.route('/:id')
  .delete(magazineCtrl.delete, function(req, res){
  })
  .get(magazineCtrl.get, function(req, res){
  })
  .put(magazineCtrl.update, function(req, res){
  });

module.exports = router;
