const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../db/models');
const { Op } = require('sequelize');
const { User, Article } = require('../db/models')

const { loginUser, logoutUser } = require('../auth');
const { csrfProtection, asyncHandler } = require('./utils');
const { check, validationResult } = require('express-validator');

/* GET users listing. */
// router.get('/', async (req, res, next) => {
//   const users = await User.findAll();
//   res.send(users);
// });
//^was here, pre-changes

router.get('/', csrfProtection, async (req, res, next) => {
  const users = await User.findAll();
  res.render('users-view', {
    title: 'Users',
    users,
    csrfToken: req.csrfToken()
  });
});

router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res, next) => {
  const user = await User.findByPk(req.params.id)

  res.render('user-profile', {
    title: `${user.firstName} ${user.lastName}'s profile`,
    user,
    csrfToken: req.csrfToken()
  });
}));



//USER SIGN UP
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
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please enter your email.')
    .isLength({ max: 50 })
    .withMessage('Maximum email length is 20 characters.')
    .isEmail()
    .withMessage('Please enter a valid email address.')
    .custom((value) => {
      return db.User.findOne({ where: { email: value } })
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

router.post('/signup', csrfProtection, userValidators,
  asyncHandler(async (req, res) => {
    const {
      firstName,
      lastName,
      username,
      email,
      password,
    } = req.body;

    const user = db.User.build({
      firstName,
      lastName,
      username,
      email,
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.hashedPassword = hashedPassword;
      await user.save();
      loginUser(req, res, user);
      // res.redirect('/');
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

//USER LOG IN
router.get('/login', csrfProtection, (req, res) => {
  res.render('user-login', {
    title: 'Login',
    csrfToken: req.csrfToken(),
  });
});


const loginValidators = [
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please enter your username.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please enter your password.'),
];

router.post('/login', csrfProtection, loginValidators,
  asyncHandler(async (req, res) => {
    const {
      username,
      password,
    } = req.body;

    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {

      const user = await db.User.findOne({ where: { username: { [Op.iLike]: username } } });
      if (user !== null) {
        const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());
        if (passwordMatch) {
          loginUser(req, res, user);
          return;
          // res.redirect('/');
        }
      }
      errors.push('Please enter a valid username and password.');
    } else {
      errors = validatorErrors.array().map((error) => error.msg);
    }

    res.render('user-login', {
      title: 'Login',
      username,
      errors,
      csrfToken: req.csrfToken(),
    });
  }));

router.post('/logout', (req, res) => {
  logoutUser(req, res);
  return res.redirect('/');
});

router.get('/demo', async (req, res) => {
  const demoUser = await db.User.findByPk(1);
  loginUser(req, res, demoUser);
})


module.exports = router;
