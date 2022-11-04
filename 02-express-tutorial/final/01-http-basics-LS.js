const http = require('http');
//create server
const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url;
  // create home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>home page</h1>');
    res.end();
  }
  // create about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>about page</h1>');
    //signaling the communication is over
    res.end();
  }
  // catch 404 if there's no resource
  else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h1>page not found</h1>');
    res.end();
  }
})

server.listen(5000);
