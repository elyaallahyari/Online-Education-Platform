const User = require('../models/userModel')

exports.addCourseToUser = async (req, res) => {
  try {
    const userId = req.params.id
    const { courseId, title, category, duration, img } = req.body

    const user = await User.findById(userId)
    if (!user) return res.status(404).json({ msg: 'User not found' })

    const alreadyAdded = user.selectedCourses.some((course) => course.courseId === courseId)
    if (alreadyAdded) {
      return res.status(400).json({ msg: 'Course already selected' })
    }

    user.selectedCourses.push({ courseId, title, category, duration, img })
    await user.save()

    res.json(user.selectedCourses)
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error })
  }
}

exports.getUserCourses = async (req, res) => {
  try {
    const userId = req.params.id
    const user = await User.findById(userId)
    if (!user) return res.status(404).json({ msg: 'User not found' })

    res.json(user.selectedCourses)
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error })
  }
}

exports.removeCourseFromUser = async (req, res) => {
  try {
    const userId = req.params.id
    const { courseId } = req.body

    const user = await User.findById(userId)
    if (!user) return res.status(404).json({ msg: 'User not found' })

    user.selectedCourses = user.selectedCourses.filter((course) => course.courseId !== courseId)
    await user.save()

    res.json(user.selectedCourses)
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error })
  }
}
