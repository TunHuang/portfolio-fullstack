const jwt = require('jsonwebtoken');
const User = require('../models/user-model');

module.exports = async (req, res, next) => {
  try {
    if (req.cookies.userToken) {
      const decodedToken = jwt.verify(req.cookies.userToken, process.env.JWT ?? 'ein Tokengeheimnis');
      const userDb = await User.findOne({ _id: decodedToken.userId});
      if (userDb) {
        req.eingeloggt = true;
        next();
      }
    } else {
      next();
    }
  } catch (err) {
    res.status(400).render('datenbankfehler', {
      fehler: err
    });
  }
};