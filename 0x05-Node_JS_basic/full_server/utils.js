import { readFile } from 'fs';

export default function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const studentData = data.split('\n');

        const allStudents = studentData.slice(1)
          .map((student) => student.split(','))
          .filter((student) => student[0] !== '');

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
        }

        resolve(studentsInField);
      }
    });
  });
}
