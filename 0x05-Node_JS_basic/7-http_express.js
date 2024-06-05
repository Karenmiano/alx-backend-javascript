const express = require('express');
const { readFile } = require('fs');

function countStudents(filePath, res) {
  return new Promise((resolve, reject) => {
    readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const studentData = data.split('\n');

        const allStudents = studentData.slice(1)
          .map((student) => student.split(','))
          .filter((student) => student[0] !== '');

        // log number of students
        res.write(`Number of students: ${allStudents.length}\n`);

        // extract the fields available
        const fields = new Set();
        for (let i = 0; i < allStudents.length; i += 1) {
          const field = allStudents[i][3];
          fields.add(field);
        }

        // create an object with fields and list of students in field and print data.
        const studentsInField = {};
        for (const field of fields) {
          const students = allStudents.filter((student) => student[3] === field);
          const studentNames = students.map((student) => student[0]);
          studentsInField[field] = studentNames;
          res.write(`Number of students in ${field}: ${studentsInField[field].length}. List: ${studentsInField[field].join(', ')}\n`);
        }
      }
      resolve(data);
    });
  });
}

const app = express();
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const dbFile = process.argv[2];
  res.write('This is the list of our students\n');
  countStudents(dbFile, res).then(() => {
    res.end();
  })
    .catch((error) => {
      res.statusCode = 404;
      res.write(error.message);
      res.end();
    });
});

app.listen(1245);

module.exports = app;
