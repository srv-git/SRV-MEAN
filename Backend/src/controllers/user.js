
const userService = require('../services/userService');
// node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

exports.getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

exports.getUser = async (req, res) => {
   try {
    const userId = req.params.id;
    const user = await userService.getUser({ id: userId });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};