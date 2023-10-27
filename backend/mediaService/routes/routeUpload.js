const express = require('express');

const router = express.Router();

const fileController=require('../controllers/fileController');

router.post('/*', fileController.uploadFile);

module.exports = router; 