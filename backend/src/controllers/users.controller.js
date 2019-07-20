const User = require('../models/user');

const usersController = {
  getListUsers: async (req, res) => {
    const users = await User.find({});
    res.json({ users });
  },

  deleteUser: async (req, res) => {
    await User.findOneAndDelete({ _id });
    res.json({ message: 'User deleted' });
  }
};

module.exports = usersController;
