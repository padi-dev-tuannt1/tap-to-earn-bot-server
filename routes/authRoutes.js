const express = require('express');
const { authenticateUser } = require('../controllers/authController');

const router = express.Router();

router.post('/login', (req, res, next) => {
    authenticateUser(req, res, next);
  });

module.exports = router;