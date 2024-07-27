
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
})

server.listen(port, hostname, () => {
    console.log(`Server listening at http://${hostname}:${port}/`);
})

function func() {
    console.log("Function was called")
}