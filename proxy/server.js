const express = require('express');
const app = express();
const parser = require('body-parser');
const axios = require('axios');

app.use(express.static(__dirname + '/client'));
app.use("/:id/", express.static(__dirname + '/client'));
app.use(parser.urlencoded({ extended: true }));

app.get('/calendar/:type/', (req, res) => {
  let type = req.params.type;
  axios(`http://3.20.164.242:1128/${type}`)
    .then((response) => {
      res.send(response.data);
    })
})

app.get('/reviews/:type/', (req, res) => {
  let type = req.params.type;
  axios(`http://3.17.98.112:3001/${type}`)
    .then((response) => {
      res.send(response.data);
    })
})

app.get('/gallery/file/:type/', (req, res) => {
  let type = req.params.type;
  axios(`http://52.15.185.43:6969/${type}`)
    .then((response) => {
      res.send(response.data);
    })
})

app.get('/hotels/:id/', (req, res) => {
  let hotelId = req.params.id;
  axios(`http://3.20.164.242:1128/hotels/${hotelId}/`)
    .then((response) => {
      res.send(response.data);
    })
})

app.get('/reviews/hotels/:id/', (req, res) => {
  let hotelId = req.params.id;
  axios(`http://3.17.98.112:3001/reviews/hotels/${hotelId}`)
    .then((response) => {
      res.send(response.data);
    })
})

app.get('/gallery/:id/', (req, res) => {
  let hotelId = req.params.id;
  axios(`http://52.15.185.43:6969/gallery/${hotelId}`)
    .then((response) => {
      res.send(response.data);
    })
})

app.listen(1345, () => {
  console.log('App listening on port 1345');
})