var express = require('express');

var auto =express();
var port =process.env.PORT || 3000;
var middle = require('./master.js');

auto.use(middle.logger);

auto.get('/ome',middle.requireAuthentication,function(req,res){
    
    res.send("yashs");
    
} );

auto.use(express.static(__dirname+"/public"));
console.log(__dirname);
auto.listen(port, function(){
    console.log("express server started on port"+port);
    
});
