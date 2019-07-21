const User = require('../models/user');

const authController = {
  login: async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });

    if (!user) res.status(401).json({ message: 'User does not exist.' });

    res.status(201).json(user);
  },

  register: async (req, res) => {
    const { username, password } = req.body;
    const user = new User({ username, password });

    try {
      await user.save();
      res.status(200).json(user);
    } catch (err){
      if(err.code = 11000) {
        return res.status(409).json({
          message: 'Username already exists.'
        });
      }

      return res.status(400).json({
        message: 'Username has not been created, try again.'
      });
    }
  }
};

module.exports = authController;
