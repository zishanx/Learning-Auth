
const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const User = require('../models/User')

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new User({ name, email, password: hashedPassword })

    await newUser.save()


    res.send("register")

})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })

    if (user === null) {
        return res.status(401).json("Invalid credentials");
    }

    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })

        res.json({ token })
    } else {
        res.status(401).json("Invalid credentials");

    }

})

module.exports = router