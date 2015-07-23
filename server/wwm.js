var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic("C:/Users/chandimal/Documents/GitHub/WalkWithMe/www")).listen(8080);