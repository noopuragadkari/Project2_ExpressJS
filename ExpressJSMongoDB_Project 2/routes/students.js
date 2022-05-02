const express = require('express');
const router = express.Router();
const studentsCtrl = require('../controllers/students');
const isLoggedIn = require('../config/auth');

router.get('/', studentsCtrl.index);
router.get('/new', isLoggedIn, studentsCtrl.new);
router.get('/:id', studentsCtrl.show);
router.post('/', isLoggedIn, studentsCtrl.create);

module.exports = router;
