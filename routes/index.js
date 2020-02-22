const express = require('express');

const usersRoute = require('./users');
const hotelsRoute = require('./hotels');
const responseRoute = require('./response');
const reviewsRoute = require('./reviews');


module.exports = () => {
  const router = express.Router();

  router.use('/users', usersRoute());
  router.use('/hotels', hotelsRoute());
  router.use('/response', responseRoute());
  router.use('/reviews', reviewsRoute());

  return router;
};
