const express = require('express');
const axios = require('axios');
const config = require('../../config');

module.exports = () => {
  const router = express.Router();

  router.get('/:responseId', async (req, res, next) => {
    try {
      const response = await axios(`${config.REVIEWS_API}/response/${req.params.responseId}`);
      return res.send(response.data.rows);
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
