const express = require('express');
const router = express.Router();
const db = require('../db/models');
const {requireAuth} = require('../auth')

const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');

const userValidators = [
    check('title')
      .exists({ checkFalsy: true })
      .withMessage('Please enter a title.')
      .isLength({ max: 30 })
      .withMessage('Maximum title length is 100 characters.'),
    check('body')
      .exists({ checkFalsy: true })
      .withMessage('Please enter something.')
]



router.get('/:id(\\d+)',asyncHandler(async(req,res) =>{
const articleId = req.params.id;
const article = await db.Article.findByPk(articleId);
const {title, body} = article;
res.render('article',{title, body})

}))

router.get('/create', csrfProtection, (req,res) =>{
    const user = db.User.build();
    res.render('article-create', {
      title: 'Create',
      user,
      csrfToken: req.csrfToken(),
    });

})

router.post('/create',(req,res) =>{

})





module.exports = router;
