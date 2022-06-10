var express = require('express');
var router = express.Router();
const db = require('../db/models');
const { User, Article } = require('../db/models')
// const { requireAuth } = require('../auth')

// const { csrfProtection, asyncHandler } = require('./utils');
// const { check, validationResult } = require('express-validator');
/* GET home page. */
router.get('/', async (req, res, next) => {

  const articles = await Article.findAll({
    include: [User],
    order: [
      ['id', 'DESC']
    ]
  });

  res.render('index', { articles });
});




module.exports = router;
