var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var costume_controller = require('../controllers/costume'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/energy', energy_controller.enegy_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/energy/:id', energy_controller.costume_delete); 
 
// PUT request to update Costume. 
router.put('/energy/:id', energy_controller.energy_update_put); 
 
// GET request for one Costume. 
router.get('/energy/:id', energy_controller.energy_detail); 
 
// GET request for list of all Costume items. 
router.get('/energy', energy_controller.energy_list); 
 
module.exports = router; 