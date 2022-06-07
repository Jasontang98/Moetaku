const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { requireAuth } = require('../auth')

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



router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const articleId = req.params.id;
    const article = await db.Article.findByPk(articleId);
    const { title, body } = article;
    res.render('article', { title, body })

}))

router.get('/create', requireAuth, csrfProtection, (req, res) => {
    const article = db.Article.build();
    res.render('article-create', {
        title: 'Create',
        article,
        csrfToken: req.csrfToken(),
    });

})

router.post('/create', requireAuth, csrfProtection, userValidators,
    asyncHandler(async (req, res) => {
        const { title, body } = req.body;

        const article = db.Article.build({ title, body });

        const validatorErrors = validationResult(req);

        if (validatorErrors.isEmpty()) {
            await article.save();
            res.redirect(`/articles/${article.id}`);
        } else {
            const errors = validatorErrors.array().map((error) => error.msg);
            res.render('article-create', {
                title: 'Create',
                article,
                errors,
                csrfToken: req.csrfToken(),
            });
        }
    }));

router.get('/:id(\\d+)/edit', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
    const articleId = req.params.id;
    const article = await db.Article.findByPk(articleId);
    res.render('article-edit', {
        title: 'Edit',
        article,
        csrfToken: req.csrfToken(),
    });
}))

router.post('/:id(\\d+)/edit', requireAuth, csrfProtection, userValidators,
    asyncHandler(async (req, res) => {
        const articleId = req.params.id;
        const article = await db.Article.findByPk(articleId);

        const validatorErrors = validationResult(req);

        if (validatorErrors.isEmpty()) {
            await article.update({ title: req.body.title, body: req.body.body })
            res.redirect(`/articles/${article.id}`);
        } else {
            const errors = validatorErrors.array().map((error) => error.msg);
            res.render('article-edit', {
                title: 'Edit',
                article,
                errors,
                csrfToken: req.csrfToken(),
            });
        }
    }));




module.exports = router;
