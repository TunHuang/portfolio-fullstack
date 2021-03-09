const User = require('../models/user-model');
const bcrypt = require('bcrypt');

const loadUser = (req, res) => res.render('registerUser', {
  eingeloggt: true,
  seitentitel: 'neuen Nutzer registrieren',
  csrfToken: req.csrfToken()
});

const postUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    const hashedPasswort = await bcrypt.hash(newUser.passwort, 10);
    const createdUser = await User.create({ ...newUser, passwort: hashedPasswort});
    const createdUserPojo = createdUser.toJSON();
    res.render('userpostergebnis', {
      ...createdUserPojo,
      eingeloggt: true,
      seitentitel: 'registrierter User'
    });
  } catch (err) {
    res.render('datenbankfehler', err);
  }
};

module.exports = {
  loadUser,
  postUser
};