const express = require('express');
const router = express.Router();

const verifyAuth = require("../middleware/verifyAuth");

const controller = require('../controllers/serverScripts');



// router.get('/cleanse-notes', controller.cleanseNotes);




module.exports = router;
