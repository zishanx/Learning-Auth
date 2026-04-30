const express = require('express')
const protect = require('../middleware/authmiddleware')
const router = express.Router()
const protect = require('../middleware/authmiddleware')
const Client = require('../models/Client')

router.get('/', protect, async (req, res) => {

    res.send("hello");
})