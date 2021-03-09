const getLogout = (req, res) => res.clearCookie('userToken').render('ausgeloggt');

module.exports = getLogout;