const Users = require('../models/user.model');

exports.getAllUsers = async () => {
  return await Users.find();
};

exports.getUser = async ({ id }) => {
  return await Users.findById(id);
};
