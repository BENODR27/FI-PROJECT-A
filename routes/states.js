const router = require('express').Router();
const State = require('../models').State;
const Country = require('../models').Country;

const { findAllHandler, createHandler, updateHandler, deleteHandler } = require('../routes/crud');

router.route('/').get(findAllHandler(State, 'States',{include: [{
    model: Country,
    attributes: ['countryName'] // Specify the attributes you want to include from the User model
  }] })).post(createHandler(State, 'State'));
router.route('/:id').put(updateHandler(State, 'State')).delete(deleteHandler(State, 'State'));

module.exports = router;