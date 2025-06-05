const Users = require('../models/user.model');
const bcrypt = require('bcryptjs');
const AppError = require('../utils/AppError');

exports.registerUser = async ({ name, email, password, phone, address }) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const existingUser = await Users.findOne({ $or: [{ email }, { name }] }).session(session);
    if (existingUser) throw new AppError('User already exists', 400);

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new Users({ name, email, password: hashedPassword, phone, address });
    await user.save({ session });
    await session.commitTransaction();
    return { id: user._id, name: user.name, email: user.email, phone: user.phone, address: user.address };
  } catch (err) {
    await session.abortTransaction();
    throw err;
  } finally {
    session.endSession();
  }
};

exports.loginUser = async ({ email, password }) => {
  const user = await Users.findOne({ email });
  if (!user) throw new Error('User not found');

  const isMatch = await bcrypt.compare(password, user.password);  //bcrypt.compare(plain, hash)
  if (!isMatch) throw new Error('Incorrect password');

  return user;
};