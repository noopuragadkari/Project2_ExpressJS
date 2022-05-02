const Student = require('../models/student');

module.exports = {
  create,
  //delete : deleteReview
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
