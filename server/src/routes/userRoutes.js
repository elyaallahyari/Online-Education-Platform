const express = require('express')
const {
  addCourseToUser,
  getUserCourses,
  removeCourseFromUser
} = require('../controllers/userController')

const router = express.Router()

router.post('/:id/courses', addCourseToUser)
router.get('/:id/courses', getUserCourses)
router.delete('/:id/courses', removeCourseFromUser)

module.exports = router
