const path = require('path');

const express = require('express');

const router = express.Router();

const messageEncrypter=require('../controllers/messageEncrypter');

const messageDecrypter=require('../controllers/messageDecrypter');

router.post('/encrypt',messageEncrypter.encrypt);

router.post('/decrypt',messageDecrypter.decrypt);

module.exports = router;