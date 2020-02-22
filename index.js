// require('newrelic');

const express = require('express');
const path = require('path');
const compression = require('compression');
const routeHandler = require('./routes');
const config = require('./config');

const app = express();
const port = config.PORT;

app.use(express.json());
app.use(compression());

app.use('/', routeHandler());

app.use((req, res, next) => {
  console.log(req);
  res.sendStatus(404);
  // res.render('error');
});


app.listen(port, () => console.log(`App listening on port ${port}!`));
