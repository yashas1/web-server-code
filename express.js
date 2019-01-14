var express = require('express');

var auto =express();

var middle={
    
    requireAuthentication : function(req, res,next){
        console.log("private!!!!");
        next();
    },
    
    logger: function(req,res,next){
        console.log("Request: " +Date()+" "+req.method+ ""+req.originalUrl);
            next();
        
    }
    
}

auto.use(middle.logger);

auto.get('/ome',middle.requireAuthentication,function(req,res){
    
    res.send("yashs");
    
} );

auto.use(express.static(__dirname+"/public"));
console.log(__dirname);
auto.listen(3000);
