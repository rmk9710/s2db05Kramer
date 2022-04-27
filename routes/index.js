var express = require('express');
var router = express.Router();

var express = require('express'); 
const energy_controlers= require('../controllers/Energy'); 
var router = express.Router(); 
 
/* GET energy */ 
router.get('/', costume_energy.costume_view_all_Page ); 
module.exports = router; 

/* GET update costume page */
router.get('/update', costume_controlers.costume_update_Page);

// A little function to check if we have an authorized user and continue on
or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }

 /* GET update costume page */
router.get('/update', secured,
costume_controlers.costume_update_Page);

router.post('/login', passport.authenticate('local'), function(req, res) {
    if(req.session.returnTo)
    res.redirect(req.session.returnTo);
    res.redirect('/');
   });