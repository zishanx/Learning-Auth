const express = require('express')
const router = express.Router()
const protect = require('../middleware/authmiddleware')
const Client = require('../models/Client')

router.get('/', protect, async (req, res) => {
    const clients = await Client.find({ createdBy: req.user.userId });
    res.send(clients);
})

router.post('/', protect, async (req, res) => {
    const { name, email, phone, company, status, notes } = req.body;
    const newClient = new Client({ name, email, phone, company, status, notes, createdBy: req.user.userId })
    await newClient.save()
    res.json(newClient)
})

router.get('/:id', protect, async (req, res) => {
    res.send("hello")
})

router.put('/:id', protect, async (req, res) => {
    res.send("hello")
})

router.delete('/:id', protect, async (req, res) => {
    res.send("hello")
})

module.exports = router;