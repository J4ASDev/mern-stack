const router = require('express').Router();
const {
  getListUsers,
  createUser,
  deleteUser
} = require('../controllers/users.controller');

router.route('/')
  .get(getListUsers)
  .post(createUser);

router.route('/:id')
  .delete(deleteUser);
  
module.exports = router;