const Card = require('../models/card.model');

exports.getAllCards = async () => {
  return await Card.find();
};

exports.addCard = async ({ name, expiry, number, cvv }) => {
  const existingUser = await Card.findOne({ $or: [{ number }] });
  if (existingUser) throw new Error('Card already exists');

  const card = new Card({ name, expiry, number, cvv });
  await card.save();
  return { id: card._id, name: card.name, expiry: card.expiry, number: card.number, cvv: card.cvv };
};