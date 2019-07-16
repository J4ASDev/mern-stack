const User = require('../models/user');

const usersCtrl = {
  getListUsers: async (req, res) => {
    const users = await User.find({});
    res.json({ users });
  },

  createUser: async (req, res) => {
    const { username } = req.body;
    const newUser = new User({ username });
    await newUser.save();

    res.json({ message: 'User saved' });
  },

  deleteUser: async (req, res) => {
    await User.findOneAndDelete({ _id: '5d2e00aaa27cc7090ce5be22' });
    res.json({ message: 'User deleted' });
  }
};

module.exports = usersCtrl;
