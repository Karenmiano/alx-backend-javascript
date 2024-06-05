const fs = require('fs');
const readline = require('readline');

function countStudents(filePath) {
  const stream = fs.createReadStream(filePath);
  const reader = readline.createInterface({ input: stream });

  reader.on('error', (error) => {
    if (error.code === 'ENOENT') {
      throw new Error('Cannot load the database');
    }
  });

  const data = [];

  reader.on('line', (row) => {
    if (row.length !== 0) {
      data.push(row.split(','));
    }
  });

  reader.on('close', () => {
    // get all Students
    const allStudents = data.slice(1);

    // log number of students
    console.log(`Number of students: ${allStudents.length}`);

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
      console.log(`Number of students in ${field}: ${studentsInField[field].length}. List: ${studentsInField[field].join(', ')}`);
    }
  });
}

module.exports = countStudents;
