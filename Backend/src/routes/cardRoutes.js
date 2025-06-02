
const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middlewares/authMiddleware');
const cardController = require('../controllers/card');


router.post('/addCard', authenticateJWT, cardController.addCard);
// router.post('/updateCard', cardController.updateCard);
// router.post('/deleteCard', cardController.deleteCard);
router.get('/getAllCards', authenticateJWT, cardController.getAllCards);

module.exports = router;