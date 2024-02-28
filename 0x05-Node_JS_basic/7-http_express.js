const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 1245;

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

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString()).then((output) => {
    res.send(['This is the list of our students', output].join('\n'));
  }).catch(() => {
    res.send('This is the list of our students\nCannot load the database');
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
