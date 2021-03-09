const express = require('express');
const router = express.Router();

const getJobs = require('../controller/jobs-controller');

const userGeneralAuth = require('../middleware/userGeneralAuth');

router
  .route('/')
    .get(userGeneralAuth, getJobs);

module.exports = router;