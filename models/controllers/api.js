// API for our resources 
exports.api = function(req, res) { 
    res.write('['); 
    res.write('{"resource":"energy", '); 
    res.write('  "verbs":["GET","PUT", "DELETE"] '); 
    res.write('}'); 
    res.write(']') 
    res.send(); 
};
// List of Energy 
exports.energy_list = async function(req, res) { 
    try{ 
        theEnergy = await Energy.find(); 
        res.send(theEnergy); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// VIEWS 
// Handle a show all view 
exports.energy_view_all_Page = async function(req, res) { 
    try{ 
        theEnergy = await Energy.find(); 
        res.render('energy', { title: 'Energy Search Results', results: theEnergy }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// Handle Costume create on POST.
exports.energy_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Energy();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.energy_type = req.body.costume_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };