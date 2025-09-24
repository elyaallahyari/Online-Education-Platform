const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    img: { type: String },
    students: { type: String },
    duration: { type: Number },
    category: { type: String },
    categoryId: { type: Number }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Course', courseSchema)
