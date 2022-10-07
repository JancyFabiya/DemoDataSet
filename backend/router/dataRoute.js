const express = require("express");
const {datadetl} = require('../controllers/dataController')

const router = express.Router();

router.get('/',datadetl)

module.exports = router