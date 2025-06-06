
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const authenticateJWT = require('../middlewares/authMiddleware');

router.get('/users', authenticateJWT, userController.getAllUsers);
router.get('/user/:id', authenticateJWT, userController.getUser);
router.put('/user/edit/:id', authenticateJWT, userController.updateProfile);

module.exports = router;