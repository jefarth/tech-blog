const router = require('express').Router();
const { User } = require('../models');

// GET all users for homepage
router.get('/', async (req, res) => {
  try {
    const dbUserData = await User.findAll({});

    const users = dbUserData.map(user => user.get({ plain: true }));

    res.render('homepage', {
      users,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
});

module.exports = router;
