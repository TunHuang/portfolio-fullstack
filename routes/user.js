const express = require('express');
const router = express.Router();

const { loadUser, postUser } = require('../controller/user-controller');

const userExclusiveAuth = require('../middleware/userExclusiveAuth');

router
  .route('/')
    .get(userExclusiveAuth, loadUser)
    .post(userExclusiveAuth, postUser);

module.exports = router;