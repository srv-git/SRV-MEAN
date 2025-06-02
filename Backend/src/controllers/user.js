
const userService = require('../services/userService');
// node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

exports.getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
};