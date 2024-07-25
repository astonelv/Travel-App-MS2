const router = require('express').Router();
let Place = require('../models/place.model');

router.route('/').get((req, res) => {
  Place.find()
    .then(places => res.json(places))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const lat = Number(req.body.lat);
  const lng = Number(req.body.lng);

  const newPlace = new Place({ name, description, lat, lng });

  newPlace.save()
    .then(() => res.json('Place added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;