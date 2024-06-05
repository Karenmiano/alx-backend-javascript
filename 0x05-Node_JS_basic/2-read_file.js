const fs = require('fs');
const readline = require('readline');

function countStudents(filePath) {
  try {
    const fileData = fs.readFileSync(filePath, 'utf8').split('\n');
    // get all Students
    const allStudents = fileData.slice(1)
      .map((student) => student.split(','))
      .filter((student) => student[0] !== '');

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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
