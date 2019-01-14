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

module.exports =middle;