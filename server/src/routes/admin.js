const express = require('express')
const router = express.Router()
const { adminLogin } = require('../controllers/adminAuth')
const {
  getReports,
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/adminController')

router.post('/login', adminLogin)
router.get('/reports', getReports)

router.get('/users', getAllUsers)
router.get('/users/:id', getUserById)
router.post('/users', createUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

module.exports = router
