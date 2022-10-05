const { Router } = require('express')
const express = require('express')
const {datadetl} = require('../controllers/dataController')


Router.get('/',datadetl)

module.exports = router