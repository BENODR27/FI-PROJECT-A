const router = require('express').Router();
const Country = require('../models').Country;
const jwtAuth = require('../jwt/jwtAuth');

const { findAllHandler, createHandler, updateHandler, deleteHandler } = require('../routes/crud');

router.route('/').get(jwtAuth,findAllHandler(Country, 'Countries')).post(createHandler(Country, 'Country'));
router.route('/:id').put(updateHandler(Country, 'Country')).delete(deleteHandler(Country, 'Country'));


module.exports = router;