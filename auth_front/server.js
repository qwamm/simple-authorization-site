
const http = require('http')
const fs = require('fs')
const hostname = 'localhost'
const port = 1841

const server = http.createServer((req, res) => {
  if (req.url ==="/") {
      const htmlFile = 'forms.html'
      fs.stat(`./${htmlFile}`, (err, stats) => {
          if(stats) {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'text/html');
              fs.createReadStream(htmlFile).pipe(res);
              console.log(res)
          }
      });
  }
  else if(req.url === '/reg')
  {
      console.log(req.url)
      res.statusCode = 200;
      res.setHeader('Content-type', 'text/html');
      var html = fs.readFileSync('reg.html');
      res.write(html);
      res.end(); //end the response
      // res.setHeader('Content-Type', '')
      // res.write('<h1>about us page<h1>'); //write a response
      // res.end(); //end the response
  }
  else if(req.url === "/style.css"){
      fs.readFile('style.css', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/css'});
          res.write(data);
          res.end();
      });
  }
})

server.listen(port, hostname, () => {
    console.log(`Server listening at http://${hostname}:${port}/`);
})