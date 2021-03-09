const Job = require('../models/job-model');

const loadFormular = (req, res, next) => {
  res.render('formular', {
    seitentitel: 'Job Eintragen',
    eingeloggt: true,
    csrfToken: req.csrfToken()
  });
};

const postFormular = async (req, res, next) => {
  try {
    const ergebnis = await Job.create(req.body);
    const ergebnisePojo = ergebnis.toJSON();
    res.render('jobpostergebnis', {
      ...ergebnisePojo,
      eingeloggt: true
    });
  } catch (err) {
    res.render('datenbankfehler', err);
  }
};

module.exports = {
  loadFormular,
  postFormular
};