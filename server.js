require('dotenv').config();

const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const cookieparser = require('cookie-parser');
const csurf = require('csurf');

// Routes
const indexRouter = require('./routes/index');
const jobsRouter = require('./routes/jobs');
const formularRouter = require('./routes/formular');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const userRouter = require('./routes/user');

const URL = process.env.DB ?? 'mongodb://localhost:27017/portfolio';

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

db.on('error', error => console.log(error));

db.once('open', () => console.log(`mit der Datenbank auf ${URL} verbunden`));

const app = express();

// handlebars als view engine
app.engine('handlebars', handlebars({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

const port = process.env.PORT ?? 3010;

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieparser());
app.use(csurf({cookie: true}));

// static Ordner
app.use(express.static('images'));
app.use(express.static('public'));
app.use(express.static('javascript'));

// Routes
app.use('/', indexRouter);
app.use('/jobs', jobsRouter);
app.use('/formular', formularRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/user', userRouter);

app.listen(port, () => console.log(`Server läuft, ich lausche auf Port: ${port}`));

