const express = require('express');
const router = express.Router();

const loadStartpage = require('../controller/index-controller');

const userGeneralAuth = require('../middleware/userGeneralAuth');

router
  .route('/')
    .get(userGeneralAuth, loadStartpage);


module.exports = router;