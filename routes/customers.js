const express = require('express');
const router = express.Router();
const customersCtrl = require('../controllers/customers');

router.get('/', customersCtrl.index);
router.get('/new', customersCtrl.new);
router.post('/', customersCtrl.create);
router.get('/edit/:id', customersCtrl.edit);
router.put('/:id', customersCtrl.update);
router.get('/delete/:id',customersCtrl.delete);


module.exports = router;
