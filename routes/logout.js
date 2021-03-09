const express = require('express');
const router = express.Router();

const getLogout = require('../controller/logout-controller');

router
  .route('/')
    .get(getLogout);

module.exports = router;