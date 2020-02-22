const express = require('express');
const axios = require('axios');
const config = require('../../config');

module.exports = () => {
  const router = express.Router();

  // GET /reviews/search?hotel=:hotelid&page=:page
  router.get('/search', async (req, res, next) => {
    try {
      const reviews = await axios(`${config.REVIEWS_API}/reviews/search?hotel=${req.query.hotelid}&page=${req.query.page}`);
      return res.json(reviews.data.rows);
    } catch (err) {
      return next(err);
    }
  });

  // GET /reviews/:id
  router.get('/:reviewId', async (req, res, next) => {
    try {
      const review = await axios(`${config.REVIEWS_API}/reviews/${req.params.reviewId}`);
      return res.json(review.data.rows);
    } catch (err) {
      return next(err);
    }
  });

  // DELETE /reviews/delete?reviewid=:id&userid=:id
  router.delete('/delete', async (req, res, next) => {
    try {
      const removeReview = await axios.delete(`${config.REVIEWS_API}/reviews/delete?reviewid=${req.query.reviewid}&userid=${req.query.userid}`);
      return res.sendStatus(200);
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
