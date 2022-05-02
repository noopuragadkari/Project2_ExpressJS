const Student = require('../models/student');

function newStudent(req, res) {
  res.render('students/new', { title: 'Add Student' });
}
function index(req, res){
  Student.find({}, function (err, students){
      res.render('students/index',{
        students
      })
  });
}
function show(req, res) {
  Student.findById(req.params.id, function(err, student) {
    res.render('students/show', { title: 'Student Details', student });
  });
}
function create(req, res){
  // we create the student object
  const  student = new Student(req.body);
  // we save the student object to the db
  student.save(function (error){
      if(error) return res.render('students/new');
      console.log(student);
      // if we save the student object then return the user
      // to the index page
      //res.redirect('/students')
      res.redirect(`/students/${student._id}`);
  });
}
function edit(req, res) {
  Student.findOne({_id: req.params.id, userRecommending: req.user._id}, function(err, student) {
    if (err || !student) return res.redirect('/students');
    res.render('students/edit', {student});
  });
}
function update(req, res) {
  Student.findOneAndUpdate(
    {_id: req.params.id, userRecommending: req.user._id},
    // update object with updated properties
    req.body,
    // options object with new: true to make sure updated doc is returned
    {new: true},
    function(err, student) {
      if (err || !student) return res.redirect('/students');
      res.redirect(`/students/${student._id}`);
    }
  );
}
module.exports = {
  new: newStudent,
  create,
  index,
  show,
  edit,
  update
};
