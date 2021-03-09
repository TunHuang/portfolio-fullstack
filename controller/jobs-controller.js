const Job = require('../models/job-model');

const getJobs = async (req, res, next) => {
  try {
    const ergebnis = await Job.find().lean();
    res.render('jobs', {
      seitentitel: 'CV',
      jobs: ergebnis,
      eingeloggt: req.eingeloggt
    });
  } catch (err) {
    res.render('datenbankfehler', {
      fehler: err,
      eingeloggt: req.eingeloggt
    });
  }
};

module.exports = getJobs;