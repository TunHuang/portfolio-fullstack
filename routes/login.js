const express = require('express');
const router = express.Router();

const {
  loadLogin,
  postLogin
} = require('../controller/login-controller');

const userGeneralAuth = require('../middleware/userGeneralAuth');

router
  .route('/')
    .get(userGeneralAuth, loadLogin)
    .post(postLogin);

module.exports = router;