var http = require('http');
// var url = require('url');
// var cal = require('./Cal');
var fs = require('fs');
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // var tong = cal.tinhtong(143,1123123);
    var url = req.url
    if (url == '/') {
        fs.readFile('index.html', function(error, data) {
            if (error == null) {
                res.write(data);
                res.end();
            } else {
                res.end(error);
            }
        });
    } else if (url == "/insert") {
        fs.writeFile('test.txt', "\nGhi file", function(error) {
            if (error == null) {
                res.end("Ghi Thành CÔng");
            } else {
                res.end(error);
            }
        });
    } else if (url == "/append") {
        fs.appendFile('test.txt', "\nGhi file lan 2", function(error) {
            if (error == null) {
                res.end("Ghi Thành Công");
            } else {
                res.end(error);
            }
        });
    } else if (url == "/unlink") {
        fs.unlink('test.txt', function(error) {
            if (error == null) {
                res.end("Detele");
            } else {
                res.end(error);
            }
        });
    } else if (url == "/rename") {
        fs.rename('test.txt', "test2.txt", function(error) {
            if (error == null) {
                res.end("Rename");
            } else {
                res.end(error);
            }
        });
    } else {
        res.end("404 Not Found");
    }
}).listen(9229);