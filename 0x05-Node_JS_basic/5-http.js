const http = require('http');
const fs = require('fs').promises;

const PORT = 1245;
const app = http.createServer();

const countStudents = (path) => fs.readFile(path, 'utf-8')
  .then((data) => {
    const lines = data.trim().split('\n');
    let length = 0;
    const students = {};
    const majors = {};

    for (const line of lines) {
      if (line) {
        const field = line.split(',');
        if (Object.prototype.hasOwnProperty.call(students, field[3])) {
          students[field[3]].push(field[0]);
        } else {
          students[field[3]] = [field[0]];
        }
        if (Object.prototype.hasOwnProperty.call(majors, field[3])) {
          majors[field[3]] += 1;
        } else {
          majors[field[3]] = 1;
        }
        length += 1;
      }
    }

    let output = `Number of students: ${length - 1}\n`;
    for (const [key, value] of Object.entries(majors)) {
      if (key !== 'field') {
        output += `Number of students in ${key}: ${value}. List: ${students[key].join(', ')}\n`;
      }
    }
    return output;
  })
  .catch(() => {
    throw new Error('Cannot load the database');
  });

app.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;
  if (req.url === '/') {
    const sendText = 'Hello Holberton School!';
    res.write(Buffer.from(sendText));
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((output) => {
      const outString = output.slice(0, -1);
      res.end(outString);
    }).catch(() => {
      res.statusCode = 404;
      res.end('Cannot load the database');
    });
  }
});

app.listen(PORT, () => {
  process.stdout.write(`Server listening at -> http://localhost:${PORT}\n`);
});

module.exports = app;
