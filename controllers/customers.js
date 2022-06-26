const Customer = require('../models/customer');

function newStudent(req, res) {
  res.render('customers/new', { title: 'Add Student' });
}

function index(req, res) {
  Customer.find({}, function(err, students) {
    res.render('customers/index', { title: 'All Students', students });
  });
}
function create(req, res){
  // we create the customer object
  const  customer = new Customer(req.body);
  // we save the customer object to the db
  customer.save(function (error){
      if(error) return res.render('customers/new');
      console.log(customer);
      // if we save the customer object then return the user
      // to the index page
      res.redirect(`/customers`);
  });
}
function edit(req, res) {
  Customer.findOne({_id: req.params.id}, function(err, customer) {
    if (err || !customer) return res.redirect('/customers');
    res.render('customers/edit', {customer});
  });
}
function update(req, res) {
  Customer.findOneAndUpdate(
    {_id: req.params.id},
    // update object with updated properties
    req.body,
    // options object with new: true to make sure updated doc is returned
    {new: true},
    function(err, customer) {
      if (err || !customer) return res.redirect('/customers');
      res.redirect(`/customers}`);
    }
  );
}
function deleteCustomer(req, res) {
  Customer.findOneAndDelete(
    {_id: req.params.id}, function(err) {
      res.redirect('/customers');
    }
  );
}


module.exports = {
  new: newStudent,
  create,
  index,
  edit,
  update,
  delete: deleteCustomer 
};
