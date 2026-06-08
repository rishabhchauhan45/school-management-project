const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  enrollmentNo: { type: String, required: true, unique: true },
  grade: { type: String, required: true },
  attendancePercentage: { type: Number, default: 0 },
  averageScore: { type: Number, default: 0 },
});

module.exports = mongoose.model('Student', studentSchema);
