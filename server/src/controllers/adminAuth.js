require('dotenv').config()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body

    const ADMIN_EMAIL = process.env.ADMIN_EMAIL
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD

    if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
      return res.status(500).json({ message: 'Admin information not configured.' })
    }

    if (email !== ADMIN_EMAIL) {
      return res.status(400).json({ message: 'Invalid admin information.' })
    }

    if (password !== ADMIN_PASSWORD) {
      return res.status(400).json({ message: 'Invalid admin information.' })
    }

    const token = jwt.sign({ role: 'admin', email: ADMIN_EMAIL }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    })

    return res.status(200).json({
      data: {
        email: ADMIN_EMAIL,
        role: 'admin',
        token
      }
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Admin login failed.' })
  }
}
