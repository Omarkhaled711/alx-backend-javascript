const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  let length = 0;
  const students = {};
  const majors = {};
  const lines = fs.readFileSync(path, 'utf-8').toString('utf-8')
    .trim().split('\n');
  for (const line of lines) {
    if (line) {
      const field = line.toString().split(',');
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
  console.log(`Number of students: ${length - 1}`);
  for (const [key, value] of Object.entries(majors)) {
    if (key !== 'field') {
      console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
    }
  }
};

module.exports = countStudents;
