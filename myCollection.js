var Energy = require('JoulsNeeded/JoulsProvided/location'); 
 
// List of all Costumes 
exports.energy_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Energy list'); 
}; 
 
// for a specific Costume. 
exports.energy_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Engergy detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.energy_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Energy create POST'); 
}; 
 
// Handle Costume delete form on DELETE. 
exports.energy_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Energy delete DELETE ' + req.params.id); 
}; 
 
// Handle Costume update form on PUT. 
exports.energy_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Energy update PUT' + req.params.id); 
}; 