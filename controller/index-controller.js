const loadStartpage = (req, res, next) => res.render('index', {
  seitentitel: 'index',
  seitenscript: `<script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
  <script src="/typewriting.js"></script>`,
  eingeloggt: req.eingeloggt
});

module.exports = loadStartpage;