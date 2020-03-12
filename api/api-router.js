const express = require('express');

const Shouts = require('../shouts/shouts-model.js');

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
  const environment = process.env;
  const port = process.env.PORT || 5000;
  res.status(200).json({ api: 'up', port, environment });
});

router.get('/shouts', (req, res, next) => {
  Shouts.find()
    .then(shouts => {
      res.status(200).json(shouts);
    })
    .catch(error => next(error));
});

router.post('/shouts', (req, res, next) => {
  Shouts.add(req.body)
    .then(shout => {
      res.status(201).json(shout);
    })
    .catch(error => next(error));
});

router.use(errorHandler);

function errorHandler(error, req, res, next) {
  // do something with error before responding
  // like saving it to a database, sending a mail to the admin
  // or using an external logging service
  res.status(500).json(error.message);
}

module.exports = router;
