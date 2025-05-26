const jwt = require('jsonwebtoken');
const cardService = require('../services/cardService');

exports.getAllCards = async (req, res) => {
    const cards = await cardService.getAllCards();
    res.status(200).json(cards);
};

exports.addCard = async (req, res) => {
  try {
    const card = await cardService.addCard(req.body);
    res.status(201).json({ message: 'Card saved successfully', card });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};