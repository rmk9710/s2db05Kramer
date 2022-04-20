var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Energy = require("JoulsNeeded/JoulsProvided/location");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
  
const index = () => {
  return (
    <div>
      <h1>index page</h1>
    </div>
  );
};
  
export default index.pug;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const connectionString =  
process.env.MONGO_CON 
mongoose = require('mongoose'); 
mongoose.connect(connectionString,  
{useNewUrlParser: true, 
useUnifiedTopology: true}); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// We can seed the collection if needed on
s2db05kramer start
async function recreateDB(){
 // Delete everything
 await Energy.deleteMany();
 let instance1 = new
Energy({energy_type:"Jouls_Needed", size:'large',
cost:25.4});
 instance1.save( function(err,doc) {
 if(err) return console.error(err);
 console.log("First object saved")
 });
}
let reseed = true;
if (reseed) { recreateDB();}
s2db05kramer start
async function recreateDB(){
 // Delete everything
 await Energy.deleteMany();
 let instance1 = new
Energy({energy_type:"Jouls_Provided", size:'large',
cost:25.4});
 instance1.save( function(err,doc) {
 if(err) return console.error(err);
 console.log("First object saved")
 });
}
let reseed = true;
if (reseed) { recreateDB();}
s2db05kramer start
async function recreateDB(){
 // Delete everything
 await Energy.deleteMany();
 let instance1 = new
Energy({energy_type:"location", size:'large',
cost:25.4});
 instance1.save( function(err,doc) {
 if(err) return console.error(err);
 console.log("First object saved")
 });
}
let reseed = true;
if (reseed) { recreateDB();}

function Energyrouter() {
  let div = document.createElement('div');
  let link = document.createElement('a');
  link.href = '#/resource';
  link.innerText = 'resource';
};
app.use("./resource");

passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username: username }, function (err, user) {
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  });

  app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
   }));
   app.use(passport.initialize());
   app.use(passport.session());

// passport config
// Use the existing connection
// The Account model
var Account =require('./models/account'));
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());