const express = require('express');
const { authenticateUser } = require('../controllers/authController');

const router = express.Router();

router.post('/login', (req, res, next) => {
  authenticateUser(req, res, (err) => {
    if (err) {
      return next(err);
    }
    res.send("ok");
  });
  });

module.exports = router;