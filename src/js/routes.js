const router = require('express').Router();
let User = require('./model.js');

router.route('/users').get((req, res) => {
  User.find().select('username gender photo')
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/users').post((req, res) => {
  const username = req.body.username;
  const gender = req.body.gender;
  const dob = req.body.dob;
  const news = req.body.news;
  const email = req.body.email;
  const photo = req.body.photo;

  const newUser = new User({
      username,
      gender,
      dob,
      news,
      email,
      photo
  });

  newUser.save()
    .then(() => res.json({message: 'Utilisateur ajouté avec success!', id: newUser._id}))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;