const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.get('/', (req, res)=>{
    res.send('Server is running!')
});

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;