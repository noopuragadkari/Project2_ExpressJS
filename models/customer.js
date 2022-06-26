const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  emailid: {
    type:String
},
consent:{
  type: String
},
}, {
  timestamps: true
});

module.exports = mongoose.model('Customer', customerSchema);