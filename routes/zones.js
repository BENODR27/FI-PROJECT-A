const router = require('express').Router();
const models = require('../models');
Zone=models.Zone;
State=models.State;
const { findAllHandler, createHandler, updateHandler, deleteHandler } = require('../routes/crud');

router.route('/').get(findAllHandler(Zone, 'Zones',{include: [{
    model: State,
    attributes: ['stateName'] // Specify the attributes you want to include from the User model
  }] })).post(createHandler(Zone, 'Zone'));
router.route('/:id').put(updateHandler(Zone, 'Zone')).delete(deleteHandler(Zone, 'Zone'));

module.exports = router;