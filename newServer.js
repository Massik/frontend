const http = require('http');
const fs = require('fs');
const sevr = http.createServer(function(request,response){
    console.log(request.method, request.url);
    const file = fs.readFileSync('Just1.html','utf8');
    response.end(file);
});

sevr.listen(process.env.PORT || 3000);
console.log('Server started!!');
