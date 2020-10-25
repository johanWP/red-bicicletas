const express = require('express');
const router = express.Router();
const bikeControllerAPI = require('../../controllers/api/BikeControllerAPI');

router.get('/', bikeControllerAPI.index);
router.post('/store', bikeControllerAPI.store);
router.delete('/:id/delete', bikeControllerAPI.delete);
router.post('/:id/update', bikeControllerAPI.update);

module.exports = router;
