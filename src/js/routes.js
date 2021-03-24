const router = require('express').Router();
let User = require('./model.js');

function appyFilters(req){
  let 
    search = req.query.search, 
    gender = req.query.gender, 
    dob = req.query.dob, 
    find = {}, 
    sort = {};

  if(search != '')
    find = { username: new RegExp(search, 'i') };
  if(gender != 0)
    sort.gender = gender;
  if(dob != 0)
    sort.dob = dob;

  return {find, sort};
}

//CREATE
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
    .then(() => res.json({message: 'Utilisateur ajouté avec success !', id: newUser._id}))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/fetchusers').post((req, res) => {
  let users = req.body.users;
  users = users.map(function(user){
    return new User(user);
  }); 
  User.insertMany(users)
    .then(() => res.json({message: 'Les utilisateurs sont bien enregistrés !', number: users.length}))
    .catch(err => res.status(400).json('Error: ' + err));
});

//READ
router.route('/users/:page/:size').get((req, res) => {
  let filters = appyFilters(req);

  User.find(filters.find)
    .skip((req.params.page - 1) * req.params.size)
    .select('username gender photo')
    .sort(filters.sort)
    .limit(parseInt(req.params.size)) 
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/users/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/countusers').get((req, res) => {
  let filters = appyFilters(req);

  User.find(filters.find)
    .countDocuments() 
    .then(number => res.json(number))
    .catch(err => res.status(400).json('Error: ' + err));
});

//UPDATE
router.route('/users/:id').put((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.username = req.body.username;
      user.gender = req.body.gender;
      user.dob = req.body.dob;
      user.email = req.body.email;
      user.news = req.body.news;

      user.save()
        .then(() => res.json({message: 'Utilisateur modifié avec success !', photo: user.photo}))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

//DELETE
router.route('/users/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('Utilisateur supprimé avec success !'))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
