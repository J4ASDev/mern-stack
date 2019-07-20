const User = require('../models/user');

const authController = {
  login: async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });

    if (!user) res.status(401).json({user, auth: true});

    res.status(200).json({user, auth: false});
  },

  register: async (req, res) => {
    const { username, password } = req.body;
    const user = new User({ username, password });

    try {
      await user.save();
      res.status(200).json({ user, auth: true });
    } catch {
      res.status(409).json({ auth: false });
    }
  }
};

module.exports = authController;
