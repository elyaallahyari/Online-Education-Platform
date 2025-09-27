const User = require('../models/userModel')
const Course = require('../models/courseModel')

// ------------------- Reports -------------------
exports.getReports = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments()
    const allUsers = await User.find({}, 'selectedCourses fullName email')
    const totalCoursesSelected = allUsers.reduce((acc, u) => acc + u.selectedCourses.length, 0)

    // -------- Most Active User --------
    let mostActiveUser = null
    if (allUsers.length > 0) {
      mostActiveUser = allUsers
        .map((item) => ({
          fullName: item.fullName,
          email: item.email,
          count: item.selectedCourses.length
        }))
        .sort((a, b) => b.count - a.count)[0]
    }

    // -------- Course Popularity --------
    let courseCount = {}
    allUsers.forEach((u) =>
      u.selectedCourses.forEach((c) => {
        courseCount[c.title] = (courseCount[c.title] || 0) + 1
      })
    )

    let mostPopularCourse = null
    let popularCourses = []
    if (Object.keys(courseCount).length > 0) {
      const sortedCourses = Object.entries(courseCount)
        .map(([title, count]) => ({ title, count }))
        .sort((a, b) => b.count - a.count)

      mostPopularCourse = sortedCourses[0]
      popularCourses = sortedCourses.slice(0, 5)
    }

    // -------- Users with their courses --------
    const usersWithCourses = allUsers.map((u) => ({
      fullName: u.fullName,
      email: u.email,
      selectedCourses: u.selectedCourses.map((c) => ({
        courseId: c.courseId,
        title: c.title,
        category: c.category,
        duration: c.duration,
        img: c.img
      }))
    }))

    res.json({
      totalUsers,
      totalCoursesSelected,
      mostActiveUser,
      mostPopularCourse,
      popularCourses,
      usersWithCourses
    })
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error })
  }
}

// ------------------- Users Management -------------------
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password')
    res.json(users)
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error })
  }
}

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id, '-password')
    if (!user) return res.status(404).json({ msg: 'User not found' })
    res.json(user)
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error })
  }
}

exports.createUser = async (req, res) => {
  try {
    const { fullName, email, password, age, role } = req.body
    const newUser = new User({ fullName, email, password, age, role })
    await newUser.save()
    res.status(201).json(newUser)
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error })
  }
}

exports.updateUser = async (req, res) => {
  try {
    const { fullName, email, age, role } = req.body
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { fullName, email, age, role },
      { new: true }
    )
    if (!user) return res.status(404).json({ msg: 'User not found' })
    res.json(user)
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error })
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    if (!user) return res.status(404).json({ msg: 'User not found' })
    res.json({ msg: 'User deleted' })
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error })
  }
}

exports.createCourse = async (req, res) => {
  try {
    const { title, category, duration, img } = req.body
    const newCourse = new Course({ title, category, duration, img })
    await newCourse.save()
    res.status(201).json(newCourse)
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error })
  }
}

exports.updateCourse = async (req, res) => {
  try {
    const { title, category, duration, img } = req.body
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      { title, category, duration, img },
      { new: true }
    )
    if (!course) return res.status(404).json({ msg: 'Course not found' })
    res.json(course)
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error })
  }
}

exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id)
    if (!course) return res.status(404).json({ msg: 'Course not found' })
    res.json({ msg: 'Course deleted' })
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error })
  }
}
