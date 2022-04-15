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

// Handle Costume update form on PUT.
exports.energy_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Energy.findById( req.params.id)
 // Do updates of properties
 if(req.body.costume_type)
 toUpdate.costume_type = req.body.costume_type;
 if(req.body.cost) toUpdate.cost = req.body.cost;
 if(req.body.size) toUpdate.size = req.body.size;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};