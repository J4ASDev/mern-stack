const User = require('../models/user');

const authController = {
  login: async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username, password });

    res.json({user, auth: true});
  },

  register: async (req, res) => {
    const { username, password } = req.body;

    const user = new User({ username, password });
    
    await user.save();
    res.json({ user, auth: true });
  }
};

module.exports = authController;
