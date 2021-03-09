const jwt = require('jsonwebtoken');
const User = require('../models/user-model');
const bcrypt = require('bcrypt');

const loadLogin = (req, res) => {
  if (req.eingeloggt) {
    res.render('eingeloggt', {
      seitentitel: 'eingeloggt',
      eingeloggt: true
    })
  } else {
    res.render('login', {
      seitentitel: 'Login',
      csrfToken: req.csrfToken()
    });
  }
};

const postLogin = async (req, res, post) => {
  try {
    const loginData = req.body;
    const userFromDb = await User.findOne({ email: loginData.email });
    if (!userFromDb) {
      throw new Error('Einloggen fehlgeschlagen');
    }
    const passwortVergleich = await bcrypt.compare(loginData.passwort, userFromDb.passwort);
    if (!passwortVergleich) {
      throw new Error('Einloggen fehlgeschlagen');
    }
    const token = jwt.sign({
      userId: userFromDb._id
    }, process.env.JWT ?? 'ein Tokengeheimnis', { expiresIn: '24h' });
    const einTag = 24 * 60 * 60 * 1000;
    res.status(200).cookie('userToken', token, {
      maxAge: einTag,
      httpOnly: true
    }).render('eingeloggt', {
      seitentitel: 'eingeloggt',
      eingeloggt: true
    });
  } catch (error) {
    res.status(403).render('datenbankfehler', {
      fehler: error,
      eingeloggt: req.eingeloggt
    });
  }
};

module.exports = {
  loadLogin,
  postLogin
};