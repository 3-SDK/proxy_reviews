const express = require('express');
const axios = require('axios');
const config = require('../../config');

module.exports = () => {
  const router = express.Router();

  router.get('/:userId', async (req, res, next) => {
    try {
      const user = await axios(`${config.REVIEWS_API}/users/${req.params.userId}`);
      return res.send(user.data.rows);
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
