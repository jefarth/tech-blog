const router = require('express').Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
    try {
        const users = await User.findAll({});
        res.json(users);
    } catch (e) {
        res.status(400).json(e);
    }

    // Send the rendered Handlebars.js template back as the response
    // res.render('homepage');
});

module.exports = router;