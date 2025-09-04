const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
  try {
    const { email, password, fullName, age } = req.body

    const existing = await User.findOne({ email })
    if (existing) {
      return res.status(400).json({ message: 'User already exists.' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = new User({
      email,
      password: hashedPassword,
      fullName,
      age
    })

    await user.save()

    res.status(201).json({ message: 'User registered successfully!' })
  } catch (error) {
    res.status(500).json({ message: 'Registration failed.', error })
  }
}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials.' })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' })
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    })

    res.status(200).json({
      data: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        age: user.age,
        token
      }
    })
  } catch (error) {
    res.status(500).json({ message: 'Login failed.', error })
  }
}
