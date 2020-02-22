const express = require('express');
const axios = require('axios');
const config = require('../../config');

module.exports = () => {
  const router = express.Router();

  // GET /hotels/:id
  router.get('/:hotelId', async (req, res, next) => {
    try {
      const hotel = await axios(`${config.REVIEWS_API}/hotels/${req.params.hotelId}`);
      return res.send(hotel.data.rows);
    } catch (err) {
      return next(err);
    }
  });

  // POST /hotels/:hotelid/review
  router.post('/:hotelId/review', async (req, res, next) => {
    try {
      const review = await axios.post(`${config.REVIEWS_API}/hotels/${req.params.hotelId}/review`, req.body);
      return res.sendStatus(201);
    } catch (err) {
      return next(err);
    }
  });

  // PUT /hotels/:hotelid/review/update?reviewid=:id&userid=:id
  router.put('/:hotelId/review/update', async (req, res, next) => {
    try {
      const review = await axios.put(`${config.REVIEWS_API}/hotels/${req.params.hotelId}/review/update?reviewid=${req.query.reviewid}&userid=${req.query.userid}`, req.body);
      return res.sendStatus(201);
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
