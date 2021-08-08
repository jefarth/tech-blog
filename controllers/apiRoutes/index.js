const router = require('express').Router();
const User = require('../../models')

router.post('/users', async (req, res) => {
    try {
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });

        if (newUser) {
            res.redirect('/');
        }
        res.json(401).json({ message: 'Bad request' });

    } catch (e) {
       res.status(401).json(e);
    }
});

module.exports = router;