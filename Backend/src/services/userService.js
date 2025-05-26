const Users = require('../models/user.model');
const bcrypt = require('bcryptjs');

exports.registerUser = async ({ name, email, password, phone, address }) => {
  const existingUser = await Users.findOne({ $or: [{ email }, { name }] });
  if (existingUser) throw new Error('User already exists');

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new Users({ name, email, password: hashedPassword, phone, address });
  await user.save();
  return { id: user._id, name: user.name, email: user.email, phone: user.phone, address: user.address };
};

exports.loginUser = async ({ email, password }) => {
  const user = await Users.findOne({ email });
  if (!user) throw new Error('User not found');

  const isMatch = await bcrypt.compare(password, user.password);  //bcrypt.compare(plain, hash)
  if (!isMatch) throw new Error('Incorrect password');

  return user;
};

exports.getAllUsers = async () => {
  return await Users.find();
};
