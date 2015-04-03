var express = require('express');
var router = express.Router();
var tagCtrl = require('../controllers/tag');

/**
 *  Routes
 */
router.route('/')
  .post(tagCtrl.save, function(req, res){
  })
  .get(tagCtrl.list, function(req, res){
  });

router.route('/:id')
  .get(tagCtrl.get, function(req, res){
  })

module.exports = router;
