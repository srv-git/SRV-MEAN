const Users = require('../models/user.model');

exports.getAllUsers = async () => {
  return await Users.find();
};
