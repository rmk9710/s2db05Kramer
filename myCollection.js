var Energy = require('JoulsNeeded/JoulsProvided/location'); 


input.form-control(type='password', name="password", placeholder='Password')
button.btn.btn-default(type='submit') Submit
a(href='create.pug')
 
// List of all Energy 
exports.energy_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Energy list'); 
}; 
 
// for a specific energy. 
exports.energy_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Engergy detail: ' + req.params.id); 
}; 
 
// Handle energy create on POST. 
exports.energy_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Energy create POST'); 
}; 
 
// Handle energy delete form on DELETE. 
exports.energy_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Energy delete DELETE ' + req.params.id); 
}; 
 
// Handle energy update form on PUT. 
exports.energy_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Energy update PUT' + req.params.id); 
}; 