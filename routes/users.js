const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { check, validationResult } = require('express-validator');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', csrfProtection, (req, res, next) => {
  const user = db.User.build();
  res.render('user-signup', {
    title: 'Sign Up',
    user,
    csrfToken: req.csrfToken(),
  });
});

const userValidators = [
  check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('Please enter your first name.')
    .isLength({ max: 30 })
    .withMessage('Maximum first name length is 30 characters.'),
  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Please enter your last name.')
    .isLength({ max: 30 })
    .withMessage('Maximum last name length is 30 characters.'),
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please enter your username.')
    .isLength({ max: 20 })
    .withMessage('Maximum username length is 20 characters.'),
  check('emailAddress')
    .exists({ checkFalsy: true })
    .withMessage('Please enter your email.')
    .isLength({ max: 50 })
    .withMessage('Maximum email length is 20 characters.')
    .isEmail()
    .withMessage('Please enter a valid email address.')
    .custom((value) => {
      return db.User.findOne({ where: { emailAddress: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Email Address is already in use by another account');
          }
        });
    }),  
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a valid password.')
    .isLength({ min: 5 })
    .withMessage('Password must be more than 5 characters long.'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please re-enter your password.')
    .isLength({ min: 5 })
    .withMessage('Password must be more than 5 characters long.')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Your passwords don't match!");
      }
      return true;
    }),
];

router.post('/user/signup', csrfProtection, userValidators,
  asyncHandler(async (req, res) => {
    const {
      firstName,
      lastName,
      username,
      emailAddress,
      password,
    } = req.body;

    const user = db.User.build({
      firstName,
      lastName,
      username,
      emailAddress,
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await user.save();
      res.redirect('/');
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('user-signup', {
        title: 'Sign Up',
        user,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  }));

module.exports = router;
