const express = require('express');
const router = express.Router();
const coursesCtrl = require('../controllers/courses');

router.post('/students/:id/course', coursesCtrl.create);
//router.delete('/reviews/:id',reviewsCtrl.delete);

module.exports = router;