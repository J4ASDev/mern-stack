const usersCtrl = {
  getListUsers: (req, res) => {
    res.json({ users: [] });
  },

  createUser: (req, res) => {
    res.json({ message: 'User saved' });
  },

  deleteUser: (req, res) => {
    res.json({ message: 'User deleted' });
  }
};

module.exports = usersCtrl;
