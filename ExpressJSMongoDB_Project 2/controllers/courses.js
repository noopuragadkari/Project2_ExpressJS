const Student = require('../models/student');

module.exports = {
  create,
  delete : deleteCourse
};

function create(req, res) {
  // Find the student to embed the course within
  Student.findById(req.params.id, function(err, student) {
    // Push the subdoc for the course
    student.courses.push(req.body);
    student.save(function(err) {
      console.log(student)
      res.redirect(`/students/${student._id}`);
    });
  });
}
function deleteCourse(req, res, next) {
  Student.findOne({'courses._id': req.params.id}).then(function(student) {
    // Find the course subdoc using the id method on Mongoose arrays
    // https://mongoosejs.com/docs/subdocs.html
    const course = student.courses.id(req.params.id);
    // Ensure that the course was created by the logged in user
    //if (!course.user.equals(req.user._id)) return res.redirect(`/students/${student._id}`);
    // Remove the course using the remove method of the subdoc
    course.remove();
    // Save the updated student
    student.save().then(function() {
      // Redirect back to the student's show view
      res.redirect(`/students/${student._id}`);
    }).catch(function(err) {
      // Let Express display an error
      return next(err);
    });
  });
}