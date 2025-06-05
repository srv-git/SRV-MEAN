
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const authenticateJWT = require('../middlewares/authMiddleware');

router.get('/users', authenticateJWT, userController.getAllUsers);

module.exports = router;