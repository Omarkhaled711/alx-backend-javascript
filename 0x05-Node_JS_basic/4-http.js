const http = require('http');

const PORT = 1245;
const app = http.createServer();

app.on('request', (req, res) => {
  const sendText = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', sendText.length);
  res.statusCode = 200;
  res.write(Buffer.from(sendText));
});

app.listen(PORT, () => {
  process.stdout.write(`Server listening at -> http://localhost:${PORT}\n`);
});

module.exports = app;
