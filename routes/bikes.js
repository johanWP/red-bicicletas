const express = require('express');
const router = express.Router();
const bikeController = require('../controllers/BikeController');

router.get('/', bikeController.index);
router.get('/create', bikeController.create);
router.post('/store', bikeController.store);
router.post('/:id/delete', bikeController.delete);
router.get('/:id/edit', bikeController.edit);
router.post('/:id/update', bikeController.update);

module.exports = router;
