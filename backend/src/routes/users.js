const router = require('express').Router();
const {
  getListUsers,
  deleteUser
} = require('../controllers/users.controller');

router.route('/')
  .get(getListUsers);

router.route('/:id')
  .delete(deleteUser);

module.exports = router;
