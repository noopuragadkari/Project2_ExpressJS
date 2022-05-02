const express = require('express');
const router = express.Router();
const coursesCtrl = require('../controllers/courses');

router.post('/students/:id/course', coursesCtrl.create);
router.delete('/courses/:id',coursesCtrl.delete);

module.exports = router;