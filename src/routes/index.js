const express = require('express');
const router = express.Router();

const User = require('./user');

router.use('/', User);


module.exports = router;
