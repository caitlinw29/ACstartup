const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

//route to render landing page
router.get('/', async (req, res) => {
  try {
    res.render('landing', {
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;