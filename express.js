var express = require('express');

var auto =express();

var middle = require('./master.js');

auto.use(middle.logger);

auto.get('/ome',middle.requireAuthentication,function(req,res){
    
    res.send("yashs");
    
} );

auto.use(express.static(__dirname+"/public"));
console.log(__dirname);
auto.listen(3000);
