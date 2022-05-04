const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/students', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', function (){
    console.log(`connected to mongoDB ${db.host} : ${db.port}`)
});