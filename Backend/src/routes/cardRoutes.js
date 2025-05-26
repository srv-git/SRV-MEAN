
const express = require('express');
const router = express.Router();
const cardController = require('../controllers/card');


router.post('/addCard', cardController.addCard);
// router.post('/updateCard', cardController.updateCard);
// router.post('/deleteCard', cardController.deleteCard);
router.get('/getAllCards', cardController.getAllCards);

module.exports = router;