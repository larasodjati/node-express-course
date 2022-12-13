const express = require('express');
const router = express.Router();

const login = require('../controllers/login');
const authMiddleware = require('../middleware/auth');

router.route('/hello').get(authMiddleware);
router.route('/logon').post(login);

module.exports = router;