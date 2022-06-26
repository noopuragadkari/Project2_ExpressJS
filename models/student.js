const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create a courseSchema
const courseSchema = new Schema({
  coursename: String,
  courseid: Number,
  coursedescription:String,
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});
const studentSchema = new Schema({
  studname: {
    type: String,
    required: true
  },
  studid: {
    type: Number,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  emailid: {
    type:String
},
courses: [courseSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);