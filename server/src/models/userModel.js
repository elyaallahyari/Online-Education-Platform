const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: { type: String },
    age: { type: Number },
    selectedCourses: [
      {
        courseId: { type: Number, required: true },
        title: { type: String, required: true },
        category: { type: String },
        duration: { type: Number },
        img: { type: String }
      }
    ],
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)
