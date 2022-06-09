const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { User, Comment } = require('../db/models')
const { requireAuth } = require('../auth')

const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');

const userValidators = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please enter a title.')
        .isLength({ max: 1000 })
        .withMessage('Maximum title length is 1000 characters.'),
    check('body')
        .exists({ checkFalsy: true })
        .withMessage('Please enter something.')
]


router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
    const articleId = req.params.id;
    const article = await db.Article.findByPk(articleId);
    const { id, title, body, user_id, updatedAt } = article;
    const author = await db.User.findByPk(user_id);
    const { firstName, lastName } = author;
    const authorName = `${firstName} ${lastName}`;
    const date = updatedAt.toDateString();
    let isAuthor = false;
    if (req.session.auth) {
        const { userId } = req.session.auth;
        if (userId === user_id) isAuthor = true;
    }
    const comments = await Comment.findAll({
        where: {
            article_id: articleId
        },
        include: User
    });

    res.render('article', { id, title, authorName, date, body, isAuthor, user_id, comments })

}))

router.get('/create', requireAuth, csrfProtection, (req, res) => {
    const article = db.Article.build();

    res.render('article-create', {
        title: 'Create',
        article,
        csrfToken: req.csrfToken()
    });

})

router.post('/create', requireAuth, csrfProtection, userValidators, asyncHandler(async (req, res) => {
    const { title, body } = req.body;
    const { userId } = req.session.auth;

    const article = db.Article.build({ title, body, user_id: userId });

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
}));

router.post('/:id(\\d+)/edit', requireAuth, csrfProtection, userValidators, asyncHandler(async (req, res) => {
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

router.post('/:id(\\d+)/delete', requireAuth, asyncHandler(async (req, res) => {
    const articleId = req.params.id;
    const article = await db.Article.findByPk(articleId);
    await article.destroy();
    res.redirect(`/`);
}))

// COMMENTS BELOW

router.post('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const { body, article_id } = req.body;
    const { userId } = req.session.auth;
    const user = await db.User.findByPk(userId);
    const comment = await db.Comment.create({ body, article_id, user_id: userId });
    const username = user.username;
    await res.json({ message: 'Success!', comment, username })

}))

router.put('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const { id, body } = req.body;
    const comment = await db.Comment.findByPk(id);
    comment.body = body;
    await comment.save();
    const { user_id } = comment;
    const user = await db.User.findByPk(user_id);
    const username = user.username;

    await res.json({ message: 'Success!', comment, username })

}))


router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    console.log(req.body)
    const comment = await db.Comment.findByPk(req.body.id);
    await comment.destroy();
    res.json({ message: 'Success!' })
}))

module.exports = router;
