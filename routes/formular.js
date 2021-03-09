const express = require('express');
const router = express.Router();

const {
  loadFormular,
  postFormular
} = require('../controller/formular-controller');

const userExclusiveAuth = require('../middleware/userExclusiveAuth');

router
  .route('/')
    .get(userExclusiveAuth, loadFormular)
    .post(userExclusiveAuth, postFormular);

module.exports = router;