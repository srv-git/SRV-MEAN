
const jwt = require('jsonwebtoken');
const authService = require('../services/authService');
const JWT_SECRET = process.env.JWT_SECRET || '6549ebea36ca96745da7d700f1cc1206f5e54d37aede4e52c38f52554511a455';
// node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

exports.register = async (req, res,next) => {
  try {
    const user = await authService.registerUser(req.body);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (err) {
    next(err);
    // res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await authService.loginUser(req.body);
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '1h' });
    res.json({ token });
  } catch (err) {
    // next(err);
    res.status(400).json({ message: err.message });
  }
};

exports.verifyToken = async (req, res) => {
  try {
    const user = await authService.verifyToken(req.body);
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '1h' });
    res.json({ token });
  } catch (err) {
    // next(err);
    res.status(400).json({ message: err.message });
  }
};