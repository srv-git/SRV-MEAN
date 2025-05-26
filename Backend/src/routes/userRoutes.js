
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.get('/', (req, res)=>{
    res.send('Server is running!')
});
router.get('/users', userController.getAllUsers);
router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;